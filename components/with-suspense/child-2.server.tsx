import { getData } from '@/server/getData'
import { Grandchild } from './grandchild.client'

export async function ChildServer2() {
  const data2 = await getData('Component 2')
  return <Grandchild data={data2} />
}
