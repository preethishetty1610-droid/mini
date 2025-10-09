import { useEffect, useRef } from 'react'

export default function AlertSound({ active }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (active && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }, [active])

  return (
    <audio ref={audioRef} preload="auto">
      <source src="data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAA" type="audio/mpeg" />
    </audio>
  )
}
