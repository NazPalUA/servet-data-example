'use client'

export function Grandchild({ data }: { data: string }) {
  return (
    <div className="flex-1 bg-white/50 border border-slate-200 p-3 md:p-4 rounded-lg text-slate-800 space-y-1 md:space-y-2 min-w-[250px]">
      <h3 className="text-base md:text-lg font-semibold">
        Grandchild Client Component
      </h3>
      <p className="text-sm md:text-base">
        Client component that does not use the &quot;use&quot; api
      </p>
      <p className="text-sm md:text-base">{data}</p>
    </div>
  )
}
