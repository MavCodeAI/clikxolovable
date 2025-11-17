import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bug, AlertTriangle } from 'lucide-react';

const ErrorTest: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);

  // This will trigger a runtime error
  const triggerError = () => {
    setShouldError(true);
  };

  // This will cause a runtime error when shouldError becomes true
  if (shouldError) {
    throw new Error('This is a test error thrown intentionally to demonstrate the ErrorBoundary component. This error shows you exactly how the error boundary catches and displays runtime errors during development.');
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Alert className="w-80 border-orange-300 bg-orange-50/95 backdrop-blur-sm dark:bg-orange-950/95 dark:border-orange-700">
        <Bug className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-800 dark:text-orange-200">
          Development Testing Tool
        </AlertTitle>
        <AlertDescription className="mt-2 text-orange-700 dark:text-orange-300">
          <p className="text-sm mb-3">
            Click the button below to trigger a test error and see how the ErrorBoundary component handles it.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={triggerError}
              size="sm"
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Trigger Error
            </Button>
          </div>
          <p className="text-xs mt-2 opacity-75">
            Only visible in development mode
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ErrorTest;
