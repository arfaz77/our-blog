import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('db conected');}).catch(err=>{console.log(err)})
const app=express();
app.listen(3002 ,()=>{
    console.log('server is running at port 3002 ')
});