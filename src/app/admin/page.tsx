'use client'
import { NextResponse } from "next/server"
import React, { useEffect, useState } from "react"
import { Controller } from "react-hook-form";

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
    const controller = new AbortController();

    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings', {
          signal: controller.signal
        });

        if (!response.ok){
          throw new Error(`HTTP error: Status ${response.status}`)
        }

        const bookings = await response.json();

        if (!controller.signal.aborted){
          setData(bookings)
          console.log(bookings)
        }
        return NextResponse.json(bookings)
      } catch(err){
        return NextResponse.json({err: 'error returning bookings'}, {status: 500})
      }
    };

    fetchBookings()

    return () => {
      controller.abort();
    }
  },[])

  return (
    <div className="page-container-screen">

      <h2>Admin Page</h2>

      <div>
        <ul>
          {data && data.map((booking: Booking, i: number) => (
            <li className="p-6" key={booking._id}>
              <strong>{booking.name}</strong> - {booking.email} - {booking.phone}
              <br />
              <small>Date: {new Date(booking.datetime).toLocaleString()}</small><br/>
              <small>Made at: {new Date(booking.createdAt).toLocaleString()}</small>
              <br />
              <small>Message: {booking.message}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}