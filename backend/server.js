// const express = require("express")
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectMongoDB from "./db//connectMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 500;

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.send("Hello ChatBox")
// });


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
    connectMongoDB();
    console.log(`server running on ${PORT} ...`);
    
})