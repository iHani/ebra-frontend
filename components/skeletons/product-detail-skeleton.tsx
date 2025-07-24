export default function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        {/* Gallery skeleton */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-200 rounded-md w-full aspect-square" />
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-200 rounded-md w-full aspect-square" />
            <div className="bg-slate-200 rounded-md w-full aspect-square" />
            <div className="bg-slate-200 rounded-md w-full aspect-square" />
            <div className="bg-slate-200 rounded-md w-full aspect-square" />
          </div>
        </div>

        {/* Info skeleton */}
        <div className="space-y-6">
          <div className="h-5 w-1/3 bg-slate-200 rounded-md" />
          <div className="h-10 w-3/4 bg-slate-200 rounded-md" />
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-slate-200 rounded-md" />
            <div className="h-4 bg-slate-200 rounded-md" />
            <div className="h-4 w-5/6 bg-slate-200 rounded-md" />
          </div>
          <div className="h-8 w-1/4 bg-slate-200 rounded-md" />
          <div className="pt-6 border-t border-slate-200 mt-6" />
          <div className="flex gap-4">
            <div className="h-12 w-32 bg-slate-200 rounded-md" />
            <div className="h-12 flex-1 bg-slate-200 rounded-md" />
          </div>
          <div className="h-12 w-full bg-slate-200 rounded-md" />
        </div>
      </div>
    </div>
  )
}
