import { ParentMinimum } from '@/components/minimum/parent.server'
import { connection } from 'next/server'

export default async function Page() {
  await connection()
  return <ParentMinimum />
}
