import mongoose from "mongoose";

const trainHistoryBkpSchema = new mongoose.Schema({
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
    required: true,
  },
});

const TrainHistoryBkp = mongoose.model(
  "TrainHistoryBkp",
  trainHistoryBkpSchema
);
export default TrainHistoryBkp;
