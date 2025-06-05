'use client'
import { NextResponse } from "next/server"
import React, { useEffect, useState } from "react"

interface Booking {
  _id : string,
  name: string,
  phone: string,
  email: string,
  datetime: string,
  message: string,
  createdAt: string,
  updatedAt: string,
}

export default function Admin({}: Booking) {
  const [data, setData] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        const bookings = await response.json();
        setData(bookings)
        console.log(bookings)
        return NextResponse.json(bookings)
      } catch(err){
        return NextResponse.json({err: 'error returning bookings'}, {status: 500})
      }
    };

    fetchBookings()
  },[])

  return (
    <div className="page-container">
        Admin page

        <div>
          <ul>
            {data && data.map((booking: Booking, i: number) => (
              <li key={booking._id}>
                <strong>{booking.name}</strong> - {booking.email} - {booking.phone}
                <br />
                <small>Date: {new Date(booking.datetime).toLocaleString()}</small>
                <br />
                <small>Message: {booking.message}</small>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}