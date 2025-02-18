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
    <div className="bg-white/30 border border-slate-200 p-4 rounded-lg text-slate-600">
      <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
      <p>{description}</p>
      <p>{message}</p>
    </div>
  )
}
