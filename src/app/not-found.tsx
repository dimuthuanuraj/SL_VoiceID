import Link from 'next/link';
import { FileQuestion, Home } from 'lucide-react';

/**
 * 404 Not Found Page
 * 
 * This component is displayed when a user navigates to a route
 * that doesn't exist in the application.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
          {/* 404 Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-4">
              <FileQuestion className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* 404 Title */}
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
            404
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help?{' '}
              <Link
                href="/register"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Register
              </Link>
              {' '}or{' '}
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
    </div>
  );
}
