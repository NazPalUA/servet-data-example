import { ParentWithSuspense } from '@/components/with-suspense/parent.server'
import { connection } from 'next/server'

export default async function Page() {
  await connection()
  return <ParentWithSuspense />
}
