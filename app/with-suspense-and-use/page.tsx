import { ParentWithSuspenseAndUse } from '@/components/with-suspense-and-use/parent.server'
import { connection } from 'next/server'

export default async function Page() {
  await connection()
  return <ParentWithSuspenseAndUse />
}
