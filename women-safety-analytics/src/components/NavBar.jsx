import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100'
  const active = 'text-gray-900'
  const inactive = 'text-gray-600'

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded bg-emerald-600" />
            <NavLink to="/" className="text-sm font-semibold tracking-wide">
              Women Safety Analytics
            </NavLink>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Home
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Dashboard
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Analytics
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Settings
            </NavLink>
          </nav>

          <button aria-label="Toggle Menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-1">
              <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`} onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/dashboard" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`} onClick={() => setOpen(false)}>
                Dashboard
              </NavLink>
              <NavLink to="/analytics" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`} onClick={() => setOpen(false)}>
                Analytics
              </NavLink>
              <NavLink to="/settings" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`} onClick={() => setOpen(false)}>
                Settings
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
