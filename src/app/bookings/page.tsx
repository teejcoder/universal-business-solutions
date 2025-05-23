import BookingForm from '@/components/booking-form'
import React from 'react'

type Props = {}

export default function Bookings({}: Props) {
  return (
    <div className='page-container section'>
      Bookings, babe.

      <div className='mx-8'>
        <BookingForm/>
      </div>
      
    </div>
  )
}