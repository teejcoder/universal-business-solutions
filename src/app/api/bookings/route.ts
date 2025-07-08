import dbConnect from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse } from "next/server";

// Mock data fallback for development/demo purposes
const MOCK_BOOKINGS = [
  {
    _id: "mock_1",
    name: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    email: "sarah@example.com",
    datetime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    message: "Interested in conversion rate optimization for our e-commerce site",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "mock_2", 
    name: "Michael Chen",
    phone: "+1 (555) 987-6543",
    email: "michael@techstart.com",
    datetime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    message: "Need help optimizing our SaaS landing pages",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "mock_3",
    name: "Emma Rodriguez", 
    phone: "+1 (555) 456-7890",
    email: "emma@retailco.com",
    datetime: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago (past)
    message: "Looking to improve checkout conversion rates",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export async function POST(request: Request){
    try {
        await dbConnect()
        const {name, phone, email, datetime, message} = await request.json()
        
        // Validate required fields
        if (!name || !email || !datetime) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, and datetime are required" }, 
                { status: 400 }
            );
        }

        const newBooking = new Booking({name, phone, email, datetime, message})
        await newBooking.save()
        
        console.log(`Created new booking for ${name}`)
        return NextResponse.json(newBooking, {status: 201})
    } catch(err: any){
        console.error("Error creating booking:", err)
        
        if (err.name === 'ValidationError') {
            return NextResponse.json(
                { error: "Invalid booking data", details: err.message }, 
                { status: 400 }
            );
        }
        
        if (err.code === 11000) {
            return NextResponse.json(
                { error: "Duplicate booking detected" }, 
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { error: "Database connection error. Please try again." }, 
            { status: 500 }
        );
    }
}

export async function GET(){
    try {
        // Attempt to connect to database
        await dbConnect();
        
        // Try to fetch bookings from database
        const bookings = await Booking.find({}).sort({createdAt: -1});
        
        console.log(`Retrieved ${bookings.length} bookings from database`);
        
        return NextResponse.json(bookings, {status: 200});

    } catch(err: any){
        console.error("Error in GET /api/bookings:", err);
        
        // Check if it's a connection error
        if (err.name === 'MongoNetworkError' || err.name === 'MongooseServerSelectionError') {
            console.log("Database connection failed, using mock data for demo");
            
            // Return mock data with a special header to indicate fallback mode
            return NextResponse.json(MOCK_BOOKINGS, {
                status: 200,
                headers: {
                    'X-Data-Source': 'mock',
                    'X-Fallback-Reason': 'database-connection-error'
                }
            });
        }
        
        // For other database errors, still try to provide mock data if available
        if (process.env.NODE_ENV === 'development') {
            console.log("Development mode: Providing mock data due to database error");
            return NextResponse.json(MOCK_BOOKINGS, {
                status: 200,
                headers: {
                    'X-Data-Source': 'mock',
                    'X-Fallback-Reason': 'development-fallback'
                }
            });
        }
        
        // In production, return proper error
        return NextResponse.json(
            { 
                error: "Unable to fetch bookings", 
                message: "Database is temporarily unavailable. Please try again later.",
                timestamp: new Date().toISOString()
            }, 
            { status: 503 } // Service Unavailable
        );
    }
}