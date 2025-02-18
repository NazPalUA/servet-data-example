'use client'

export function ClientChildComponent({
  title,
  description,
  message
}: {
  title: string
  description: string
  message: string
}) {
  return (
    <div className="bg-white/50 border border-slate-200 p-4 rounded-lg text-slate-800 space-y-2">
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p>{description}</p>
      <p>{message}</p>
    </div>
  )
}
