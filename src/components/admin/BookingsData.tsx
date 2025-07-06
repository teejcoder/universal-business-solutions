"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare,
  TrendingUp,
  Eye,
  Trash2
} from "lucide-react";
import { use } from "react";

interface Booking {
  _id: string;
  name: string;
  phone: string;
  email: string;
  datetime: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

// Create a promise-based data fetcher
const fetchBookings = async (): Promise<Booking[]> => {
  const response = await fetch("/api/bookings", {
    cache: 'no-store' // Ensure fresh data
  });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

// Create the promise outside the component to avoid recreating it
const bookingsPromise = fetchBookings();

export default function BookingsData() {
  // Use the 'use' hook to suspend until data is ready
  const data = use(bookingsPromise);

  // Calculate stats
  const totalBookings = data.length;
  const todayBookings = data.filter(booking => {
    const bookingDate = new Date(booking.datetime);
    const today = new Date();
    return bookingDate.toDateString() === today.toDateString();
  }).length;

  const upcomingBookings = data.filter(booking => {
    const bookingDate = new Date(booking.datetime);
    const now = new Date();
    return bookingDate > now;
  }).length;

  const recentBookings = data.filter(booking => {
    const createdDate = new Date(booking.createdAt);
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return createdDate > weekAgo;
  }).length;

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">
              All time bookings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayBookings}</div>
            <p className="text-xs text-muted-foreground">
              Scheduled for today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBookings}</div>
            <p className="text-xs text-muted-foreground">
              Future appointments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentBookings}</div>
            <p className="text-xs text-muted-foreground">
              New this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Recent Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No bookings found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {data.map((booking) => {
                const bookingDate = new Date(booking.datetime);
                const createdDate = new Date(booking.createdAt);
                const isPastBooking = bookingDate < new Date();
                
                return (
                  <div
                    key={booking._id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="font-semibold text-foreground">
                          {booking.name}
                        </div>
                        <Badge variant={isPastBooking ? "secondary" : "default"}>
                          {isPastBooking ? "Completed" : "Upcoming"}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {booking.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {booking.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {bookingDate.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {bookingDate.toLocaleTimeString()}
                        </div>
                      </div>
                      
                      {booking.message && (
                        <div className="text-sm text-muted-foreground bg-muted/30 p-2 rounded">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          {booking.message}
                        </div>
                      )}
                      
                      <div className="text-xs text-muted-foreground">
                        Created: {createdDate.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
