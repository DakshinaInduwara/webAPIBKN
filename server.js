import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import trainRoute from './routes/trainRoutes.js'


// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const trainRoutes = require('./routes/trainRoutes');
// const mongoose = require();


const app = express();
dotenv.config();

const connect = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to mongoDB");
} catch (error) {
    console.log(error);
}

} 

//middlewares
app.use(express.json())
app.use(cors())

app.use("/web/train", trainRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connect()
    console.log(`Server running on port ${PORT}`);
})
    

