import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import { error } from "console";
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('db conected');}).catch(err=>{console.log(err)})
const app=express();

app.use(express.json());
app.listen(3002 ,()=>{
    console.log('server is running at port 3002 ')
});

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500
    const message= err.message|| 'internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})