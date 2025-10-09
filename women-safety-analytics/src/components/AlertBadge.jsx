export default function AlertBadge({ label = 'Active Alert' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-danger/10 text-danger px-2 py-1 text-xs font-medium animate-pulse">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.66.41l9 17.25a.75.75 0 01-.66 1.09H3a.75.75 0 01-.66-1.09l9-17.25a.75.75 0 01.66-.41zm0 15a.75.75 0 100 1.5.75.75 0 000-1.5zm.75-6.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" clipRule="evenodd" />
      </svg>
      {label}
    </span>
  )
}
