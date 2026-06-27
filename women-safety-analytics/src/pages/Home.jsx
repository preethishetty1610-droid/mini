export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">Women Safety Analytics</h1>
        <p className="text-gray-600">A lightweight, extensible dashboard to visualize safety insights in real-time. Built with React, Tailwind, and Recharts.</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Live dashboard with alerts</li>
          <li>Gender analytics over time</li>
          <li>Responsive and mobile-friendly UI</li>
        </ul>
      </div>
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="aspect-video w-full rounded-md bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <span className="text-gray-500">Demo Preview</span>
        </div>
      </div>
    </section>
  )
}
