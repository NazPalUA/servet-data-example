'use client'

import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-10 w-fit items-center justify-center rounded-lg bg-slate-50 p-1 shadow-sm border border-slate-200',
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 whitespace-nowrap transition-all',
        'hover:bg-slate-100 hover:text-slate-900',
        'data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-slate-900 data-[state=active]:shadow-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50',
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        'mt-4 ring-offset-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
