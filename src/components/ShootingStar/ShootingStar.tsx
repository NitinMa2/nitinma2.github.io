import { useEffect, useRef, useState } from 'react'
import styles from './ShootingStar.module.css'

interface Shot {
  path: string
}

function randomShot(): Shot {
  const vw = window.innerWidth
  const vh = window.innerHeight

  const startX = vw * (Math.random() * 0.85 + 0.05)
  const startY = vh * (Math.random() * 0.35 + 0.02)

  const goingRight = startX < vw * 0.5
  const travelX = goingRight
    ? vw * (Math.random() * 0.25 + 0.35)
    : -(vw * (Math.random() * 0.25 + 0.35))
  const travelY = vh * (Math.random() * 0.2 + 0.25)

  const endX = startX + travelX
  const endY = startY + travelY
  const cx = startX + travelX * (0.3 + Math.random() * 0.2)
  const cy = startY + travelY * (0.15 + Math.random() * 0.2)

  return {
    path: `M ${startX.toFixed(1)},${startY.toFixed(1)} Q ${cx.toFixed(1)},${cy.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`,
  }
}

export default function ShootingStar() {
  const [shot, setShot] = useState<Shot | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    function schedule() {
      const delay = Math.random() * 10000 + 10000
      timerRef.current = setTimeout(() => {
        setShot(randomShot())
        timerRef.current = setTimeout(() => {
          setShot(null)
          schedule()
        }, 1800)
      }, delay)
    }
    schedule()
    return () => clearTimeout(timerRef.current)
  }, [])

  if (!shot) return null

  return (
    <div
      className={styles.star}
      style={{ offsetPath: `path('${shot.path}')` } as React.CSSProperties}
    />
  )
}
