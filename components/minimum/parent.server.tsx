import { getData } from '@/server/getData'
import { Child1 } from './child-1.client'
import { Child2 } from './child-2.client'

export async function ParentMinimum() {
  const data1 = await getData('Component 1')
  const data2 = await getData('Component 2')

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">Minimum Route</h1>
      <div className="flex gap-4 items-stretch">
        <Child1 data={data1} />
        <Child2 data={data2} />
      </div>
    </div>
  )
}
