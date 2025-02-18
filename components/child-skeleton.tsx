export function ChildSkeleton() {
  return (
    <div className="bg-white/50 border flex-1 border-slate-200 p-4 rounded-lg text-slate-800 space-y-3">
      <div className="h-7 bg-slate-200 rounded-md w-48 animate-pulse" />
      <div className="h-5 bg-slate-200 rounded-md w-56 animate-pulse " />
      <div className="space-y-1">
        <div className="h-5 bg-slate-200 rounded-md w-32 animate-pulse" />
        <div className="h-5 bg-slate-200 rounded-md w-16 animate-pulse" />
      </div>
    </div>
  )
}
