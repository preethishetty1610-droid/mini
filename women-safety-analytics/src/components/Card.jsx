export default function Card({ title, action, children }) {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        {action}
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
