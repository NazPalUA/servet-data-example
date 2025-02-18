import { Suspense } from 'react'
import { ChildSkeleton } from '../child-skeleton'
import { ChildServer1 } from './child-1.server'
import { ChildServer2 } from './child-2.server'

export async function ParentWithSuspense() {
  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
        With Suspense
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
        <Suspense fallback={<ChildSkeleton />}>
          <ChildServer1 />
        </Suspense>
        <Suspense fallback={<ChildSkeleton />}>
          <ChildServer2 />
        </Suspense>
      </div>
    </div>
  )
}
