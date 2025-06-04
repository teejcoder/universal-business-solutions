import dbConnect from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        await dbConnect()
        const {name, phone, email, datetime, message} = await request.json()
        const newBooking = new Booking({name, phone, email, datetime, message})
        await newBooking.save()
        return NextResponse.json(newBooking, {status: 201})
    } catch(err){
        console.error("Error in route.ts", err)
        return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }
}