import Booking from "../models/bookingModel.js";

const ticketPrices = {
  "1st Class": 1000,
  "2nd Class": 500,
  "3rd Class": 250,
};

export const createBooking = async (req, res) => {
  try {
    const {
      passengerType,
      date,
      stationFrom,
      stationTo,
      numberOfPassengers,
      ticketClass,
    } = req.body;
    const totalPrice = ticketPrices[ticketClass] * numberOfPassengers;

    const booking = new Booking({
      passengerType,
      date,
      stationFrom,
      stationTo,
      numberOfPassengers,
      ticketClass,
      totalPrice,
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};
