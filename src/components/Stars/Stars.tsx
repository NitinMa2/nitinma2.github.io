import { useMemo } from 'react'
import styles from './Stars.module.css'

const STAR_COUNT = 80

interface Star {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 10 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 3,
  }))
}

export default function Stars() {
  const stars = useMemo(() => generateStars(STAR_COUNT), [])

  return (
    <div className={styles.canvas} aria-hidden="true">
      {stars.map((s) => (
        <svg
          key={s.id}
          className={styles.star}
          viewBox="0 0 10 14"
          width={s.size}
          height={s.size * 1.4}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
          aria-hidden="true"
        >
          <path d="M 5,0 Q 5,7 10,7 Q 5,7 5,14 Q 5,7 0,7 Q 5,7 5,0 Z" fill="white" />
        </svg>
      ))}
    </div>
  )
}
