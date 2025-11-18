import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    const errorId = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // In production, report error to service like Sentry, LogRocket, etc.
    // For now, log to console with structured format
    console.group('🚨 Application Error');
    console.error('Error ID:', this.state.errorId);
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('User Agent:', navigator.userAgent);
    console.error('URL:', window.location.href);
    console.groupEnd();
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    const errorId = this.state.errorId ? ` [Error ID: ${this.state.errorId}]` : '';
    const subject = encodeURIComponent(`ClikXo Website Error Report${errorId}`);
    const body = encodeURIComponent(`Hi ClikXo Team,

I encountered an error on your website:

URL: ${window.location.href}
Error ID: ${this.state.errorId || 'Not available'}
Browser: ${navigator.userAgent}
Time: ${new Date().toLocaleString()}

The page stopped working and showed an error message. Please help resolve this.

Best regards,
[Your Name]
`);
    window.location.href = `mailto:support@clikxo.com?subject=${subject}&body=${body}`;
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center p-4" role="alert" aria-live="assertive">
          <div className="max-w-lg w-full space-y-6">
            {/* Error Icon and Title */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-destructive animate-pulse" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-foreground">Oops! Something went wrong</h1>
                <p className="text-muted-foreground">
                  We're sorry for the inconvenience. Our team has been notified.
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-muted-foreground">
                    Error ID: <code className="bg-muted px-1 py-0.5 rounded">{this.state.errorId}</code>
                  </p>
                )}
              </div>
            </div>

            {/* Error Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happened?</CardTitle>
                <CardDescription>
                  An unexpected error occurred while loading this page.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {this.state.error && (
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Technical Detail</AlertTitle>
                    <AlertDescription className="font-mono text-xs">
                      {this.state.error.message}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={this.handleRetry} className="flex-1" variant="default">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button onClick={this.handleGoHome} className="flex-1" variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                </div>

                {/* Contact Support */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    Still having issues? Contact our support team.
                  </p>
                  <Button
                    onClick={this.handleContactSupport}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:bg-primary/10"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Report Issue
                  </Button>
                </div>

                {/* Quick Contact Info */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Or call us directly:</p>
                  <a
                    href="tel:+97144318653"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    +971 44318653
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
