import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
      name: {
        type: String,
        required: true,
      },
      rollNum: {
        type: String,
        unique: true,
        required: true
      },
      phoneNum: {
        type: String,
        unique: true,
        required: true
      },
      department: {
        type: String,
        required: true
      },
      role1: {
        type: String,
        required: true
      },
      role2: {
        type: String,
        required: true
      },
      answer1:{
        type: String
      },
      answer2:{
        type: String
      },
      answer3:{
        type: String
      },
      creativity:{
        type: Number
      },
      hardworking:{
        type: Number
      },
      punctuality:{
        type: Number
      },
      dedication:{
        type: Number
      }

})

export const UserModel = mongoose.model("User", UserSchema);