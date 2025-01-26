"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("./auth/auth");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rollNum, phoneNum, department, role1, role2 } = req.body;
    try {
        yield db_1.UserModel.create({
            name,
            rollNum,
            phoneNum,
            department,
            role1,
            role2
        });
        if (process.env.JWT_SECRET) {
            const token = jsonwebtoken_1.default.sign({
                rollNum,
            }, process.env.JWT_SECRET);
            res.json({
                message: "Registered Successfully",
                token,
            });
        }
        else {
            res.status(403).json({ message: "JWT_SECRET not defined" });
        }
    }
    catch (e) {
        res.json({
            message: "There was an error !!!"
        });
    }
}));
app.put("/questions", auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { answer1, answer2, answer3 } = req.body;
    //@ts-ignore
    const rollNum = req.rollNum;
    try {
        yield db_1.UserModel.findOneAndUpdate({ rollNum }, {
            $set: {
                answer1,
                answer2,
                answer3
            }
        }, {
            upsert: false
        });
        res.json({
            message: "Answered Successfully"
        });
    }
    catch (e) {
        res.json({
            message: "There was an error !!!"
        });
    }
}));
app.put("/rating", auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { creativity, hardworking, punctuality, dedication } = req.body;
    //@ts-ignore
    const rollNum = req.rollNum;
    try {
        yield db_1.UserModel.findOneAndUpdate({ rollNum }, {
            $set: {
                creativity,
                hardworking,
                punctuality,
                dedication
            }
        }, {
            upsert: false
        });
        res.json({
            message: "Answered Successfully"
        });
    }
    catch (e) {
        res.json({
            message: "There was an error !!!"
        });
    }
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoUrl = process.env.MONGO_URL;
            if (!mongoUrl) {
                console.log("MONGO_URL is not defined in the environment variables");
            }
            else {
                yield mongoose_1.default.connect(mongoUrl);
            }
            app.listen(3000, () => {
                console.log("App running on port 3000 !!!");
            });
        }
        catch (e) {
            console.log("There was an error");
        }
    });
}
main();
