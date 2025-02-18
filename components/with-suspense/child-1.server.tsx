import { getData } from '@/server/getData'
import { Grandchild } from './grandchild.client'

export async function ChildServer1() {
  const data1 = await getData('Component 1')
  return <Grandchild data={data1} />
}
