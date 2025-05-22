import BookingForm from '@/components/booking-form'
import React from 'react'

type Props = {}

export default function Bookings({}: Props) {
  return (
    <div>
      Bookings, babe.
      <BookingForm/>
    </div>
  )
}