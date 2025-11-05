'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Global Error Boundary for Root Layout
 * 
 * This component catches errors that occur in the root layout,
 * including errors in the root error boundary itself.
 * 
 * It must be placed at src/app/global-error.tsx and include
 * <html> and <body> tags as it replaces the entire root layout.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error
    console.error('Critical Application Error:', error);
    
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // logCriticalError(error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center">
              {/* Critical Error Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 rounded-full p-4">
                  <AlertTriangle className="w-12 h-12 text-orange-600" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Critical Application Error
              </h1>

              {/* Error Description */}
              <p className="text-gray-600 mb-6">
                A critical error occurred that prevented the application from loading.
                Please try refreshing the page.
              </p>

              {/* Error Details (development only) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-gray-100 rounded-md p-4 mb-6 text-left">
                  <p className="text-xs font-mono text-gray-700 break-all">
                    <strong>Error:</strong> {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs font-mono text-gray-600 mt-2">
                      <strong>Digest:</strong> {error.digest}
                    </p>
                  )}
                  {error.stack && (
                    <pre className="text-xs font-mono text-gray-600 mt-2 overflow-auto max-h-40">
                      {error.stack}
                    </pre>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={reset}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition-colors"
                >
                  Reload Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
