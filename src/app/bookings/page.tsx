import BookingForm from '@/components/bookings/booking-form'
import React from 'react'

type Props = {}

export default function Bookings({}: Props) {
  return (
    <div className='page-container-screen'>
      <div>
        Bookings page, babe.  
      </div>

      <BookingForm/>
      
    </div>
  )
}