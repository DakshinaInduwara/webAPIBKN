import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    trainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Train",
      required: [true, "Train ID is required"],
      index: true,
    },
    stationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      required: [true, "Station ID is required"],
      index: true,
    },
    arrivalTime: {
      type: Date,
      required: [true, "Arrival time is required"],
      validate: {
        validator: function (v) {
          return v > Date.now();
        },
        message: "Arrival time must be in the future",
      },
    },
    departureTime: {
      type: Date,
      required: [true, "Departure time is required"],
      validate: {
        validator: function (v) {
          return v > this.arrivalTime;
        },
        message: "Departure time must be after arrival time",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Schedule", scheduleSchema);
