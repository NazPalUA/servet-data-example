'use client'

import { ClientChildComponent } from '../client-child-component'

export function Child1({ data }: { data: string }) {
  return (
    <ClientChildComponent
      title="Minimum Child 1"
      description="Client component with minimal setup"
      message={data}
    />
  )
}
