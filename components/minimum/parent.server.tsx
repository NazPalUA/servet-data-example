import { getData } from '@/server/getData'
import { Child } from './child.client'

export async function ParentMinimum() {
  const data1 = await getData('Component 1')
  const data2 = await getData('Component 2')

  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
        Basic Approach
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
        <Child data={data1} />
        <Child data={data2} />
      </div>
    </div>
  )
}
