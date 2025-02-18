'use client'

import { use } from 'react'
import { ClientChildComponent } from '../client-child-component'

export function Child2({ dataPromise }: { dataPromise: Promise<string> }) {
  const data = use(dataPromise)
  return (
    <ClientChildComponent
      title="With Suspense and Use Child 2"
      description="Client component with suspense and use api setup"
      message={data}
    />
  )
}
