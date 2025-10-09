import { useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../components/Card.jsx'
import { mockAlerts, mockGenderCounts } from '../data/mockData.js'

export default function Analytics() {
  const [filter, setFilter] = useState('All')
  const [sortBy, setSortBy] = useState('date-desc')

  const filtered = useMemo(() => {
    const list = filter === 'All' ? mockAlerts : mockAlerts.filter((a) => a.type === filter)
    const sorted = [...list].sort((a, b) => {
      const aKey = `${a.date} ${a.time}`
      const bKey = `${b.date} ${b.time}`
      return sortBy === 'date-asc' ? aKey.localeCompare(bKey) : bKey.localeCompare(aKey)
    })
    return sorted
  }, [filter, sortBy])

  const incidentTypes = ['All', ...Array.from(new Set(mockAlerts.map((a) => a.type)))]

  return (
    <div className="grid gap-6">
      <Card title="Gender Distribution Over Time">
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockGenderCounts} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="men" stroke="#2563eb" strokeWidth={2} dot={false} name="Men" />
              <Line type="monotone" dataKey="women" stroke="#db2777" strokeWidth={2} dot={false} name="Women" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Past Alerts" action={
        <div className="flex gap-2 items-center">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border rounded-md px-2 py-1 text-sm">
            {incidentTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded-md px-2 py-1 text-sm">
            <option value="date-desc">Newest</option>
            <option value="date-asc">Oldest</option>
          </select>
        </div>
      }>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Time</th>
                <th className="px-3 py-2">Location</th>
                <th className="px-3 py-2">Type of Incident</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={`${a.id}`} className="border-t">
                  <td className="px-3 py-2 whitespace-nowrap">{a.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{a.time}</td>
                  <td className="px-3 py-2">{a.location}</td>
                  <td className="px-3 py-2">{a.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
