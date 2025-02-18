import { Suspense } from 'react'
import { ChildServer1 } from './child-1.server'
import { ChildServer2 } from './child-2.server'

export async function ParentWithSuspense() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">With Suspense</h1>
      <div className="flex gap-4 items-stretch">
        <Suspense fallback={<div>Loading first component...</div>}>
          <ChildServer1 />
        </Suspense>
        <Suspense fallback={<div>Loading second component...</div>}>
          <ChildServer2 />
        </Suspense>
      </div>
    </div>
  )
}
