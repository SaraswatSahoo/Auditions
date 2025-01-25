"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const token = req.headers.token;
    if (process.env.JWT_SECRET) {
        //@ts-ignore
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            //@ts-ignore
            req.rollNum = decoded.rollNum;
            next();
        }
        else {
            res.status(403).json({
                message: "You are not Signed In"
            });
        }
    }
    else {
        res.json({
            message: "JWT_SECRET not defined"
        });
    }
}
