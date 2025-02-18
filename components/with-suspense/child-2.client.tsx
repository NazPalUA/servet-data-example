'use client'

import { ClientChildComponent } from '../client-child-component'

export function Child2({ data }: { data: string }) {
  return (
    <ClientChildComponent
      title="With Suspense Child 2"
      description="Client component with suspense setup"
      message={data}
    />
  )
}
