import { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card.jsx'
import AlertBadge from '../components/AlertBadge.jsx'
import AlertSound from '../components/AlertSound.jsx'

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default function Dashboard() {
  const [men, setMen] = useState(12)
  const [women, setWomen] = useState(8)
  const [activeAlerts, setActiveAlerts] = useState([])

  // Mock live updates every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setMen((m) => Math.max(0, m + randomBetween(-2, 2)))
      setWomen((w) => Math.max(0, w + randomBetween(-2, 2)))

      // Randomly trigger an alert ~30% chance
      if (Math.random() < 0.3) {
        const types = ['Lone woman detected', 'Surrounded by men', 'Loitering detected']
        const newAlert = {
          id: Date.now(),
          label: types[randomBetween(0, types.length - 1)],
          time: new Date().toLocaleTimeString(),
        }
        setActiveAlerts((list) => [newAlert, ...list].slice(0, 5))
      }
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const total = men + women
  const menPct = useMemo(() => (total ? Math.round((men / total) * 100) : 0), [men, total])
  const womenPct = 100 - menPct

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 grid gap-6">
        <Card title="Live Camera Feed" action={activeAlerts.length > 0 ? <AlertBadge label="Active Alerts" /> : null}>
          <div className="aspect-video w-full rounded-md bg-black/80 grid place-items-center text-gray-400">
            <span>Placeholder Feed</span>
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Gender Count">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-semibold">{total}</div>
                <div className="text-xs text-gray-500">People detected</div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="text-lg font-semibold text-blue-600">{men}</div>
                  <div className="text-xs text-gray-500">Men ({menPct}%)</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-pink-600">{women}</div>
                  <div className="text-xs text-gray-500">Women ({womenPct}%)</div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Incident Hotspots Map">
            <div className="aspect-video w-full rounded-md bg-gradient-to-br from-red-50 to-emerald-50 grid place-items-center text-gray-500">
              Map Placeholder
            </div>
          </Card>
        </div>
      </div>

      <div className="lg:col-span-1 grid gap-6">
        <Card title="Active Alerts">
          <div className="space-y-2">
            {activeAlerts.length === 0 && (
              <div className="text-sm text-gray-500">No active alerts.</div>
            )}
            {activeAlerts.map((a) => (
              <div key={a.id} className="rounded-md border p-3 bg-danger/5 border-danger/30 animate-pulse">
                <div className="text-sm font-medium text-danger">{a.label}</div>
                <div className="text-xs text-gray-500">{a.time}</div>
              </div>
            ))}
          </div>
          <AlertSound active={activeAlerts.length > 0} />
        </Card>
      </div>
    </div>
  )
}
