export function PageLayout({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="minimum-route p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex gap-4 items-stretch">{children}</div>
    </div>
  )
}
