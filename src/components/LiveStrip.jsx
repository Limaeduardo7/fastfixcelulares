import { useState, useEffect } from 'react'

function getBaseCount() {
  const d = new Date()
  const seed = d.getDate() * 31 + d.getMonth()
  const base = 9 + (seed % 11)
  return Math.max(1, Math.min(42, base + Math.max(0, d.getHours() - 9)))
}

function getNextSlot() {
  const h = new Date().getHours()
  if (h < 9) return 'hoje às 09:30'
  if (h >= 18) return 'amanhã às 09:00'
  const d = new Date()
  const next = Math.min(18, h + 1)
  const mins = d.getMinutes() < 30 ? '30' : '00'
  const hh = mins === '00' ? next + 1 : next
  return `hoje às ${String(hh).padStart(2, '0')}:${mins}`
}

function getTodayDate() {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })
    .format(new Date())
    .replace(/^\w/, (c) => c.toUpperCase())
}

export default function LiveStrip() {
  const [count, setCount] = useState(getBaseCount)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.18) {
        setCount((c) => Math.min(c + 1, 42))
        setFlash(true)
        setTimeout(() => setFlash(false), 700)
      }
    }, 9000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative z-10 border-y border-white/[.06] bg-gradient-to-r from-orange-500/[.08] via-transparent to-orange-500/[.08] py-3.5 text-[13px] text-ink-200">
      <div className="container-site flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-pulse-o shadow-[0_0_12px_rgba(255,106,26,.8)]" />
          <span>
            <span className="font-mono font-bold transition-colors duration-300" style={{ color: flash ? '#FFA86A' : '#fff' }}>
              {count}
            </span>{' '}
            atendimentos realizados <strong className="text-white">hoje</strong> · Proximo horario:{' '}
            <strong className="text-white">{getNextSlot()}</strong>
          </span>
        </div>
        <span className="text-ink-300">{getTodayDate()}</span>
      </div>
    </div>
  )
}
