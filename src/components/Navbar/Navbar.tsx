import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    const preferred =
      stored ??
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    applyTheme(preferred)
    setTheme(preferred)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function applyTheme(t: 'dark' | 'light') {
    document.documentElement.dataset.theme = t === 'light' ? 'light' : ''
    localStorage.setItem('theme', t)
  }

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          NM
        </a>
        <nav className={styles.nav}>
          <a href="#portfolio" className={styles.link}>
            Work
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
          <button
            className={styles.toggle}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </nav>
      </div>
    </header>
  )
}
