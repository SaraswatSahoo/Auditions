require("dotenv").config();

import express from "express";
import { UserModel } from "./db/db";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { auth } from "./auth/auth";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {

    const { name, rollNum, phoneNum, department, role1, role2 } = req.body;
    try {

        await UserModel.create({
            name,
            rollNum,
            phoneNum,
            department,
            role1,
            role2
        });

        if(process.env.JWT_SECRET){

            const token  = jwt.sign({
                rollNum,
            }, process.env.JWT_SECRET);

            res.json({
                message: "Registered Successfully",
                token,
            })

        } else {
            res.status(403).json({message: "JWT_SECRET not defined"});
        }
        
    } catch (e){
        res.json({
            message: "There was an error !!!"
        })
    }
})

app.put("/questions", auth, async (req, res) => {

    const { answer1, answer2, answer3 } = req.body;
    //@ts-ignore
    const rollNum = req.rollNum;

    try{

        await UserModel.findOneAndUpdate({rollNum},{
            $set: {
                answer1,
                answer2,
                answer3
            }
        },{
            upsert: false
        })

        res.json({
            message: "Answered Successfully"
        })
    } catch (e) {

        res.json({
            message: "There was an error !!!"
        })
    }

})

app.put("/rating", auth, async (req, res) => {

    const { creativity, hardworking, punctuality, dedication } = req.body;

    //@ts-ignore
    const rollNum = req.rollNum;

    try{

        await UserModel.findOneAndUpdate({rollNum},{
            $set: {
                creativity,
                hardworking,
                punctuality,
                dedication
            }
        },{
            upsert: false
        })

        res.json({
            message: "Answered Successfully"
        })
    } catch (e) {

        res.json({
            message: "There was an error !!!"
        })
    }

})



async function main(){
    try{

        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            console.log("MONGO_URL is not defined in the environment variables");
        }else{
            await mongoose.connect(mongoUrl);
        }
        app.listen( process.env.PORT || 3000, () => {
            console.log("App running on port 3000 !!!");
        })
    } catch (e){
        console.log("There was an error");
    }
}

main();