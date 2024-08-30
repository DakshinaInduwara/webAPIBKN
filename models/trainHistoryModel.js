import mongoose from "mongoose";

const trainHistorySchema = new mongoose.Schema({
  trainId: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
    //required: true,
  },
  location: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const TrainHistory = mongoose.model("TrainHistory", trainHistorySchema);
export default TrainHistory;
