import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  datetime: { type: Date, required: true },
  message: { type: String }
}, { timestamps: true });

// Check if the model already exists to prevent overwriting
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;