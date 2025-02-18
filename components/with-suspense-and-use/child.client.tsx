'use client'

import { use } from 'react'

export function Child({ dataPromise }: { dataPromise: Promise<string> }) {
  const data = use(dataPromise)
  return (
    <div className="flex-1 bg-white/50 border border-slate-200 p-4 rounded-lg text-slate-800 space-y-2">
      <h3 className="text-lg font-semibold ">Child Client Component</h3>
      <p>Client component that uses the "use" api</p>
      <p>{data}</p>
    </div>
  )
}
