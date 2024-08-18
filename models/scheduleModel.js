import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  trainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Train',
    required: [true, 'Train ID is required'],
    index: true, // Index for faster lookup
  },
  stationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Station',
    required: [true, 'Station ID is required'],
    index: true, // Index for faster lookup
  },
  arrivalTime: {
    type: Date,
    required: [true, 'Arrival time is required'],
    validate: {
      validator: function (v) {
        return v > Date.now();
      },
      message: 'Arrival time must be in the future',
    },
  },
  departureTime: {
    type: Date,
    required: [true, 'Departure time is required'],
    validate: {
      validator: function (v) {
        return v > this.arrivalTime;
      },
      message: 'Departure time must be after arrival time',
    },
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
  versionKey: false,  // Removes the __v field
});

// Virtual property to calculate duration between arrival and departure
scheduleSchema.virtual('duration').get(function () {
  return (this.departureTime - this.arrivalTime) / 1000; // Duration in seconds
});

// Method to check if the train is late
scheduleSchema.methods.isLate = function (currentTime) {
  return currentTime > this.arrivalTime;
};

// Pre-save middleware to ensure departure time is after arrival time
scheduleSchema.pre('save', function (next) {
  if (this.departureTime <= this.arrivalTime) {
    next(new Error('Departure time must be after arrival time'));
  } else {
    next();
  }
});

export default mongoose.model('Schedule', scheduleSchema);
