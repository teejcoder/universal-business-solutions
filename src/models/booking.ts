import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  phone: string;
  email: string;
  datetime: Date;
  message: string;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  datetime: {
    type: Date,
    required: [true, 'Booking date and time is required']
  },
  message: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.models.Booking || 
  mongoose.model<IBooking>('Booking', BookingSchema);