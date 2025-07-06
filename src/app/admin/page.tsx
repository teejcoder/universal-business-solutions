"use client";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { 
  Download,
  Filter
} from "lucide-react";
import BookingsData from "@/components/admin/BookingsData";
import BookingsLoadingSpinner from "@/components/admin/BookingsLoadingSpinner";

export default function Admin() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage bookings and monitor business performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Suspense Boundary for Booking Data */}
        <Suspense fallback={<BookingsLoadingSpinner />}>
          <BookingsData />
        </Suspense>
      </div>
    </div>
  );
}
