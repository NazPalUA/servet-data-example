'use client'

import { ClientChildComponent } from '../client-child-component'

export function Child1({ data }: { data: string }) {
  return (
    <ClientChildComponent
      title="With Suspense Child 1"
      description="Client component with suspense setup"
      message={data}
    />
  )
}
