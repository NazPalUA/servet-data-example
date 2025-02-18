'use client'

export function Child({ data }: { data: string }) {
  return (
    <div className="flex-1 bg-white/50 border border-slate-200 p-4 rounded-lg text-slate-800 space-y-2">
      <h3 className="text-lg font-semibold ">Child Client Component</h3>
      <p>Client component with minimal setup</p>
      <p>{data}</p>
    </div>
  )
}
