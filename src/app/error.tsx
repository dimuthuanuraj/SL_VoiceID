'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

/**
 * Global Error Boundary Component
 * 
 * This component catches runtime errors in the application and provides
 * a user-friendly error UI with the ability to recover.
 * 
 * Next.js automatically wraps this component around the application
 * when it's placed at src/app/error.tsx
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application Error:', error);
    
    // In production, you could send this to an error tracking service
    // e.g., Sentry, LogRocket, or custom error logging
    if (process.env.NODE_ENV === 'production') {
      // logErrorToService(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-4">
              <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
          </div>

          {/* Error Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Oops! Something went wrong
          </h1>

          {/* Error Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We encountered an unexpected error. This has been logged and we'll look into it.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 mb-6 text-left">
              <p className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-2">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            
            <a
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-200"
            >
              Go Home
            </a>
          </div>

          {/* Support Link */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Need help?{' '}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
