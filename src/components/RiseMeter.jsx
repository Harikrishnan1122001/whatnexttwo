import { useEffect, useState } from 'react'

const TICKS = [
  { pct: 2, label: 'start' },
  { pct: 30, label: 'learn' },
  { pct: 62, label: 'build' },
  { pct: 92, label: 'rise' },
]

export default function RiseMeter() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    function measure() {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(measure)
        ticking = true
      }
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="rise-meter" aria-hidden="true">
      <div className="rise-meter__track">
        <div className="rise-meter__fill" style={{ height: `${progress}%` }} />
        {TICKS.map((tick) => (
          <div
            key={tick.label}
            className={`rise-meter__tick${progress >= tick.pct ? ' rise-meter__tick--passed' : ''}`}
            style={{ bottom: `${tick.pct}%` }}
          >
            <span className="rise-meter__dot" />
            <span className="rise-meter__label">{tick.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
