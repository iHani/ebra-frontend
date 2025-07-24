export default function ProductGridSkeleton() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 animate-pulse">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="h-6 w-24 bg-slate-200 rounded-md" />
          <div className="h-10 w-full md:w-44 bg-slate-200 rounded-md" />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="h-6 w-16 bg-slate-200 rounded-md" />
          <div className="h-10 w-full md:w-32 bg-slate-200 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-slate-200 rounded-md w-full aspect-square" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-1/4 bg-slate-200 rounded-md" />
              <div className="h-5 w-3/4 bg-slate-200 rounded-md" />
              <div className="h-5 w-1/2 bg-slate-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
