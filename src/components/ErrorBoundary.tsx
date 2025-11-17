import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
  isDetailsOpen: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    isDetailsOpen: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      isDetailsOpen: process.env.NODE_ENV === 'development', // Auto-expand in dev mode
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 ErrorBoundary caught an error:', error);
    console.error('Error stack:', error.stack);
    console.error('Error info:', errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // In production, you might want to report this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Report to error logging service here
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      isDetailsOpen: false
    });
  };

  private copyErrorToClipboard = async () => {
    if (!this.state.error) return;

    const errorDetails = `
Error: ${this.state.error.message}
Stack Trace:
${this.state.error.stack}

Component Stack:
${this.state.errorInfo?.componentStack || 'Not available'}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorDetails);
    } catch (err) {
      console.error('Failed to copy error to clipboard:', err);
    }
  };

  private toggleDetails = () => {
    this.setState(prev => ({ isDetailsOpen: !prev.isDetailsOpen }));
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI takes precedence
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-red-25 to-orange-50 dark:from-red-950 dark:via-red-900 dark:to-orange-950 p-4">
          <div className="w-full max-w-4xl">
            {/* Main Error Card */}
            <Alert className="border-red-500/50 bg-red-50/80 backdrop-blur-sm dark:bg-red-950/80">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <AlertTitle className="text-red-800 dark:text-red-200 text-xl font-bold">
                🚨 Runtime Error Caught
              </AlertTitle>
              <AlertDescription className="mt-3 text-red-700 dark:text-red-300">
                <div className="space-y-4">
                  <p className="text-base">
                    An unexpected error occurred in the application. This error has been caught by our ErrorBoundary component.
                  </p>

                  {this.state.error && (
                    <div className="bg-red-100/50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        Error Details:
                      </h4>
                      <p className="text-sm text-red-700 dark:text-red-300 font-mono">
                        {this.state.error.message}
                      </p>
                    </div>
                  )}

                  {/* Development-specific details */}
                  {isDevelopment && this.state.error && (
                    <Collapsible open={this.state.isDetailsOpen} onOpenChange={this.toggleDetails}>
                      <CollapsibleTrigger className="flex items-center gap-2 text-red-700 dark:text-red-300 hover:text-red-800 dark:hover:text-red-200 transition-colors">
                        {this.state.isDetailsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        <span className="font-medium">
                          {this.state.isDetailsOpen ? 'Hide' : 'Show'} Technical Details
                        </span>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="mt-3 space-y-4">
                        {/* Error Stack Trace */}
                        {this.state.error.stack && (
                          <div className="bg-red-100/30 dark:bg-red-900/20 p-4 rounded-lg border border-red-200/50 dark:border-red-800/50">
                            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                              <span className="text-xs bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono">STACK</span>
                              Error Stack Trace
                            </h5>
                            <pre className="text-xs text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800 overflow-x-auto whitespace-pre-wrap font-mono">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}

                        {/* Component Stack */}
                        {this.state.errorInfo?.componentStack && (
                          <div className="bg-red-100/30 dark:bg-red-900/20 p-4 rounded-lg border border-red-200/50 dark:border-red-800/50">
                            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                              <span className="text-xs bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono">TREE</span>
                              React Component Stack
                            </h5>
                            <pre className="text-xs text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800 overflow-x-auto whitespace-pre-wrap font-mono">
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </div>
                        )}

                        {/* Error Info */}
                        <div className="bg-red-100/30 dark:bg-red-900/20 p-4 rounded-lg border border-red-200/50 dark:border-red-800/50">
                          <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                            <span className="text-xs bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono">META</span>
                            Error Metadata
                          </h5>
                          <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <p><strong>Error Name:</strong> {this.state.error.name || 'Unknown'}</p>
                            <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
                            <p><strong>Environment:</strong> {process.env.NODE_ENV || 'unknown'}</p>
                            <p><strong>UserAgent:</strong> {typeof window !== 'undefined' ? navigator.userAgent : 'Server-side'}</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-red-200 dark:border-red-800">
                    <Button
                      onClick={this.handleRetry}
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900 transition-colors"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Try Again
                    </Button>

                    <Button
                      onClick={() => window.location.reload()}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white border-red-600"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reload Page
                    </Button>

                    {isDevelopment && this.state.error && (
                      <Button
                        onClick={this.copyErrorToClipboard}
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900 transition-colors"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Error
                      </Button>
                    )}

                    <Button
                      onClick={() => console.clear()}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-200 dark:hover:bg-red-950"
                    >
                      Clear Console
                    </Button>
                  </div>

                  {/* Help text */}
                  <div className="text-sm text-red-600 dark:text-red-400 bg-red-100/50 dark:bg-red-900/30 p-3 rounded-lg border border-red-200 dark:border-red-800">
                    <strong>Need Help?</strong>
                    {isDevelopment ? (
                      <span> Check the browser console for more details, or copy the error details above.</span>
                    ) : (
                      <span> If this problem persists, please contact our support team and provide the error details.</span>
                    )}
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            {/* Development-only additional info */}
            {isDevelopment && (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h4 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xs bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded font-mono">DEV</span>
                  Development Mode
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  You're seeing this detailed error view because the application is running in development mode.
                  In production, users would see a more user-friendly error message.
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
