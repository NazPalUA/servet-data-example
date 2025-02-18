'use client'

export function Child({ data }: { data: string }) {
  return (
    <div className="flex-1 bg-white/50 border border-slate-200 p-3 md:p-4 rounded-lg text-slate-800 space-y-1 md:space-y-2 min-w-[250px]">
      <h3 className="text-base md:text-lg font-semibold">
        Child Client Component
      </h3>
      <p className="text-sm md:text-base">
        Client component with minimal setup
      </p>
      <p className="text-sm md:text-base">{data}</p>
    </div>
  )
}
