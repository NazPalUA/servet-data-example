export function PageLayout({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-10 ">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex gap-4 items-stretch">{children}</div>
    </div>
  )
}
