import mongoose from 'mongoose'

const trainSchema = new mongoose.Schema({
  trainId: {
    type: String,
    required: [true, 'Train ID is required'],
    unique: true,
    trim: true,
  },
  trainName: {
    type: String,
    required: [true, 'Train name is required'],
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    //required: [true, 'Train location is required'],
    default: '',
  },

  lat: {  
    type: Number,
    default: 0,
    //required: [true, 'Latitude is required'],
    // min: [-90, 'Latitude must be between -90 and 90'],
    // max: [90, 'Latitude must be between -90 and 90'],
  },
  lon: { 
    type: Number,
    default: 0, 
    //required: [true, 'Longitude is required'],
    // min: [-180, 'Longitude must be between -180 and 180'],
    // max: [180, 'Longitude must be between -180 and 180'],
  },
  capacity: {
    type: Number,
    required: true,
    default: 1,
  },
  speed: {
    type: Number,
    require : true,
    default: 0,
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
