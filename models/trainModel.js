import mongoose from 'mongoose'

const trainSchema = new mongoose.Schema({
  trainId: {
    type: String,
    required: true,
  },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Train', trainSchema);
