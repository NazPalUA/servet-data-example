import { getData } from '@/server/getData'
import { Suspense } from 'react'
import { Child } from './child.client'

export async function ParentWithSuspenseAndUse() {
  const data1 = getData('Component 1')
  const data2 = getData('Component 2')

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">With Suspense and Use Route</h1>
      <div className="flex gap-4 items-stretch">
        <Suspense fallback={<div>Loading first component...</div>}>
          <Child dataPromise={data1} />
        </Suspense>
        <Suspense fallback={<div>Loading second component...</div>}>
          <Child dataPromise={data2} />
        </Suspense>
      </div>
    </div>
  )
}
