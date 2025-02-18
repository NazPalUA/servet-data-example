import { getData } from '@/server/getData'
import { Suspense } from 'react'
import { ChildSkeleton } from '../child-skeleton'
import { Child } from './child.client'

export async function ParentWithSuspenseAndUse() {
  const data1 = getData('Component 1')
  const data2 = getData('Component 2')

  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
        With Suspense and Use Route
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
        <Suspense fallback={<ChildSkeleton />}>
          <Child dataPromise={data1} />
        </Suspense>
        <Suspense fallback={<ChildSkeleton />}>
          <Child dataPromise={data2} />
        </Suspense>
      </div>
    </div>
  )
}
