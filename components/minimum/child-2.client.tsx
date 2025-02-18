'use client'

import { ClientChildComponent } from '../client-child-component'

export function Child2({ data }: { data: string }) {
  return (
    <ClientChildComponent
      title="Minimum Child 2"
      description="Client component with minimal setup"
      message={data}
    />
  )
}
