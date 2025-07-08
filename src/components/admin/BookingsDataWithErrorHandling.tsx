"use client";
import React, { useState, useEffect } from "react";
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
  Trash2,
  RefreshCw,
  AlertTriangle,
  Database,
  Wifi
} from "lucide-react";
import BookingsLoadingSpinner from "./BookingsLoadingSpinner";

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

interface BookingsDataState {
  data: Booking[];
  loading: boolean;
  error: Error | null;
  retryCount: number;
  isMockData: boolean;
  fallbackReason?: string;
}

const MAX_RETRY_ATTEMPTS = 3;

export default function BookingsDataWithErrorHandling() {
  const [state, setState] = useState<BookingsDataState>({
    data: [],
    loading: true,
    error: null,
    retryCount: 0,
    isMockData: false
  });

  const fetchBookings = async (): Promise<{data: Booking[], isMockData: boolean, fallbackReason?: string}> => {
    const response = await fetch("/api/bookings", {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Bookings API endpoint not found. Please check your server configuration.");
      }
      if (response.status === 500) {
        throw new Error("Database connection error. Please check your database configuration.");
      }
      if (response.status === 503) {
        throw new Error("Database service is temporarily unavailable. Please try again later.");
      }
      if (response.status >= 500) {
        throw new Error(`Server error (${response.status}). Please try again later.`);
      }
      throw new Error(`Network error: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format. Expected JSON data.");
    }

    const data = await response.json();
    const isMockData = response.headers.get("X-Data-Source") === "mock";
    const fallbackReason = response.headers.get("X-Fallback-Reason") || undefined;

    return { data, isMockData, fallbackReason };
  };

  const loadData = async (isRetry = false) => {
    if (isRetry) {
      setState(prev => ({ ...prev, loading: true, error: null }));
    }

    try {
      const result = await fetchBookings();
      setState({
        data: result.data,
        loading: false,
        error: null,
        retryCount: 0,
        isMockData: result.isMockData,
        fallbackReason: result.fallbackReason
      });
    } catch (error) {
      console.error('Error loading bookings:', error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error as Error,
        retryCount: isRetry ? prev.retryCount + 1 : 1,
        isMockData: false
      }));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRetry = () => {
    if (state.retryCount < MAX_RETRY_ATTEMPTS) {
      loadData(true);
    }
  };

  // Loading state
  if (state.loading) {
    return <BookingsLoadingSpinner />;
  }

  // Error state
  if (state.error) {
    return <ErrorFallback error={state.error} onRetry={handleRetry} retryCount={state.retryCount} />;
  }

  // Success state - render the actual data
  return <BookingsDataContent 
    data={state.data} 
    onRefresh={() => loadData(true)} 
    isMockData={state.isMockData}
    fallbackReason={state.fallbackReason}
  />;
}

interface ErrorFallbackProps {
  error: Error;
  onRetry: () => void;
  retryCount: number;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onRetry, retryCount }) => {
  const getErrorIcon = () => {
    const errorMessage = error.message.toLowerCase();
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return <Wifi className="w-8 h-8 text-destructive" />;
    }
    if (errorMessage.includes('database') || errorMessage.includes('api')) {
      return <Database className="w-8 h-8 text-destructive" />;
    }
    return <AlertTriangle className="w-8 h-8 text-destructive" />;
  };

  const canRetry = retryCount < MAX_RETRY_ATTEMPTS;

  return (
    <>
      {/* Error Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Bookings", subtitle: "Data unavailable" },
          { title: "Today's Bookings", subtitle: "Data unavailable" },
          { title: "Upcoming", subtitle: "Data unavailable" },
          { title: "This Week", subtitle: "Data unavailable" }
        ].map((stat, i) => (
          <Card key={i} className="border-destructive/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground">--</div>
              <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Error Details Card */}
      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            {getErrorIcon()}
            Unable to Load Bookings Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center py-8 space-y-4">
              <p className="text-muted-foreground">
                {error.message}
              </p>
              
              {canRetry ? (
                <div className="space-y-2">
                  <Button onClick={onRetry} variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again ({retryCount}/{MAX_RETRY_ATTEMPTS})
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Attempt {retryCount} of {MAX_RETRY_ATTEMPTS}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-destructive font-medium">
                    Maximum retry attempts reached
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Please check your database connection and refresh the page
                  </p>
                </div>
              )}
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-sm">
              <strong className="text-foreground">Possible solutions:</strong>
              <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                <li>Verify your database is running and accessible</li>
                <li>Check that the MongoDB connection string is correct</li>
                <li>Ensure the /api/bookings endpoint is working</li>
                <li>Check browser network tab for additional error details</li>
                <li>Try refreshing the entire page</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

interface BookingsDataContentProps {
  data: Booking[];
  onRefresh: () => void;
  isMockData?: boolean;
  fallbackReason?: string;
}

const BookingsDataContent: React.FC<BookingsDataContentProps> = ({ 
  data, 
  onRefresh, 
  isMockData = false, 
  fallbackReason 
}) => {
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
      {/* Mock Data Warning Banner */}
      {isMockData && (
        <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/30">
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Demo Mode Active
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                  Showing sample data because {fallbackReason === 'database-connection-error' ? 'database connection failed' : 'running in development mode'}. 
                  Real bookings will appear here when the database is connected.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={onRefresh} className="text-yellow-700 border-yellow-300 hover:bg-yellow-100 dark:text-yellow-300 dark:border-yellow-600 dark:hover:bg-yellow-900/30">
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry Connection
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className={isMockData ? "border-yellow-200 dark:border-yellow-800" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">
              {isMockData ? "Demo data" : "All time bookings"}
            </p>
          </CardContent>
        </Card>

        <Card className={isMockData ? "border-yellow-200 dark:border-yellow-800" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayBookings}</div>
            <p className="text-xs text-muted-foreground">
              {isMockData ? "Demo data" : "Scheduled for today"}
            </p>
          </CardContent>
        </Card>

        <Card className={isMockData ? "border-yellow-200 dark:border-yellow-800" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBookings}</div>
            <p className="text-xs text-muted-foreground">
              {isMockData ? "Demo data" : "Future appointments"}
            </p>
          </CardContent>
        </Card>

        <Card className={isMockData ? "border-yellow-200 dark:border-yellow-800" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentBookings}</div>
            <p className="text-xs text-muted-foreground">
              {isMockData ? "Demo data" : "New this week"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Bookings
            </CardTitle>
            <Button variant="outline" size="sm" onClick={onRefresh}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {data.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No bookings yet</h3>
              <p className="text-muted-foreground">
                When customers make bookings, they'll appear here.
              </p>
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
};
