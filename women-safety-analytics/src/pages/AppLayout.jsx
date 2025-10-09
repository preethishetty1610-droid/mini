import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
          Women Safety Analytics • Demo
        </div>
      </footer>
    </div>
  )
}
