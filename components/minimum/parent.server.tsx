import { PageLayout } from '@/components/page-layout'
import { getData } from '@/server/getData'
import { Child1 } from './child-1.client'
import { Child2 } from './child-2.client'

export async function ParentMinimum() {
  const data1 = await getData('Component 1')
  const data2 = await getData('Component 2')

  return (
    <PageLayout title="Minimum Route">
      <Child1 data={data1} />
      <Child2 data={data2} />
    </PageLayout>
  )
}
