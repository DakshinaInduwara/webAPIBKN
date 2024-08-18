import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import trainRoute from './routes/trainRoutes.js'
import userRoute from './routes/userRoutes.js'
import stationRoute from './routes/stationRouts.js'
import scheduleRoute from './routes/scheduleRoutes.js'


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
app.use("/web/user", userRoute)
app.use("/web/station", stationRoute)
app.use('/web/schedule', scheduleRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connect()
    console.log(`Server running on port ${PORT}`);
})
    

