"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  RefreshCw, 
  Database,
  Wifi,
  Server
} from "lucide-react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface AdminErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

class AdminErrorBoundary extends React.Component<AdminErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: AdminErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Admin Error Boundary caught an error:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} retry={this.retry} />;
      }

      return <DefaultErrorFallback error={this.state.error!} retry={this.retry} />;
    }

    return this.props.children;
  }
}

interface DefaultErrorFallbackProps {
  error: Error;
  retry: () => void;
}

const DefaultErrorFallback: React.FC<DefaultErrorFallbackProps> = ({ error, retry }) => {
  const getErrorIcon = () => {
    const errorMessage = error.message.toLowerCase();
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return <Wifi className="w-12 h-12 text-destructive" />;
    }
    if (errorMessage.includes('database') || errorMessage.includes('db')) {
      return <Database className="w-12 h-12 text-destructive" />;
    }
    if (errorMessage.includes('server') || errorMessage.includes('500')) {
      return <Server className="w-12 h-12 text-destructive" />;
    }
    return <AlertTriangle className="w-12 h-12 text-destructive" />;
  };

  const getErrorTitle = () => {
    const errorMessage = error.message.toLowerCase();
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return "Connection Error";
    }
    if (errorMessage.includes('database') || errorMessage.includes('db')) {
      return "Database Error";
    }
    if (errorMessage.includes('server') || errorMessage.includes('500')) {
      return "Server Error";
    }
    return "Something went wrong";
  };

  const getErrorDescription = () => {
    const errorMessage = error.message.toLowerCase();
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return "Unable to connect to the server. Please check your internet connection and try again.";
    }
    if (errorMessage.includes('database') || errorMessage.includes('db')) {
      return "There was an issue connecting to the database. Please try again in a moment.";
    }
    if (errorMessage.includes('server') || errorMessage.includes('500')) {
      return "The server is experiencing issues. Please try again later.";
    }
    return "An unexpected error occurred while loading the admin dashboard.";
  };

  return (
    <div className="space-y-6">
      {/* Error Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-destructive/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Unable to load
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground">--</div>
              <p className="text-xs text-muted-foreground">Data unavailable</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Error Card */}
      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            Error Loading Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 space-y-6">
            {getErrorIcon()}
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {getErrorTitle()}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {getErrorDescription()}
              </p>
            </div>

            <div className="space-y-4">
              <Button onClick={retry} className="min-w-[120px]">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              <div className="text-xs text-muted-foreground">
                Error: {error.message}
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-left text-sm text-muted-foreground">
              <strong>Troubleshooting:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Check your internet connection</li>
                <li>Verify the database is running</li>
                <li>Ensure API endpoints are accessible</li>
                <li>Contact support if the issue persists</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminErrorBoundary;
