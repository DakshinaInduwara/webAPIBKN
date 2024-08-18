import mongoose from 'mongoose'

const trainSchema = new mongoose.Schema({
  trainId: {
    type: String,
    required: [true, 'Train ID is required'],
    unique: true,
    trim: true,
  },
  location: {
    lat: {  
      type: Number,
      required: [true, 'Latitude is required'],
      min: [-90, 'Latitude must be between -90 and 90'],
      max: [90, 'Latitude must be between -90 and 90'],
    },
    lon: { 
      type: Number, 
      required: [true, 'Longitude is required'],
      min: [-180, 'Longitude must be between -180 and 180'],
      max: [180, 'Longitude must be between -180 and 180'],
    },
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
  versionKey: false,  // Removes the __v field that is added by default
});

// Index trainId for faster querying

export default mongoose.model('Train', trainSchema);
