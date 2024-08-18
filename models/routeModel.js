import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  stations: [{
    stationId: {
      type: String,
      ref: 'Station',
      required: true,
    },
    sequence: {
      type: Number,
      required: true,
    },
  }],
}, {
  timestamps: true,
  versionKey: false,
});

export default mongoose.model('Route', routeSchema);
