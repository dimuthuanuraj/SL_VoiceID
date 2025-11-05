import { Loader2 } from 'lucide-react';

/**
 * Global Loading UI Component
 * 
 * This component is displayed while page content is being loaded.
 * Next.js automatically shows this when navigating between routes
 * or when Suspense boundaries are loading.
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="flex justify-center mb-4">
          <Loader2 className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin" />
        </div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Loading...
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
