import { AlertCircle } from 'lucide-react'

export function EmptyState() {
 return (
  <div className="flex flex-col items-center justify-center h-full">
   <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
   <h2 className="text-2xl font-bold text-gray-700 mb-2">No Content Generated</h2>
   <p className="text-gray-500 text-center">
    Select a use case and click Write for me to generate content.
   </p>
  </div>
 )
}

