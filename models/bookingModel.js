import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    passengerType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    stationFrom: {
        type: String,
        required: true
    },
    stationTo: {
        type: String,
        required: true
    },
    numberOfPassengers: {
        type: Number,
        required: true
    },
    ticketClass: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
