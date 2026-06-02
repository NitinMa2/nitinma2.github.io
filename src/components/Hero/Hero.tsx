import headshot from '../../assets/nitin-mathew-sq.jpg'
import styles from './Hero.module.css'

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="4" width="18" height="13" rx="1.5" />
      <polyline points="1,4 10,12 19,4" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M10,0 C15.523,0 20,4.59 20,10.253 C20,14.782 17.138,18.624 13.167,19.981 C12.66,20.082 12.48,19.762 12.48,19.489 C12.48,19.151 12.492,18.047 12.492,16.675 C12.492,15.719 12.172,15.095 11.813,14.777 C14.04,14.523 16.38,13.656 16.38,9.718 C16.38,8.598 15.992,7.684 15.35,6.966 C15.454,6.707 15.797,5.664 15.252,4.252 C15.252,4.252 14.414,3.977 12.505,5.303 C11.706,5.076 10.85,4.962 10,4.958 C9.15,4.962 8.295,5.076 7.497,5.303 C5.586,3.977 4.746,4.252 4.746,4.252 C4.203,5.664 4.546,6.707 4.649,6.966 C4.01,7.684 3.619,8.598 3.619,9.718 C3.619,13.646 5.954,14.526 8.175,14.785 C7.889,15.041 7.63,15.493 7.54,16.156 C6.97,16.418 5.522,16.871 4.63,15.304 C4.63,15.304 4.101,14.319 3.097,14.247 C3.097,14.247 2.122,14.234 3.029,14.87 C3.029,14.87 3.684,15.185 4.139,16.37 C4.139,16.37 4.726,18.2 7.508,17.58 C7.513,18.437 7.522,19.245 7.522,19.489 C7.522,19.76 7.338,20.077 6.839,19.982 C2.865,18.627 0,14.783 0,10.253 C0,4.59 4.478,0 10,0" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true">
      {/* "i" dot */}
      <path d="M2.442,4.921 C1.093,4.921 0,3.819 0,2.46 C0,1.102 1.093,0 2.442,0 C3.79,0 4.883,1.102 4.883,2.46 C4.884,3.819 3.79,4.921 2.442,4.921 Z" />
      {/* "i" vertical bar */}
      <path d="M0,7 L5,7 L5,20 L0,20 Z" />
      {/* "n" shape */}
      <path d="M7,7 L11,7 L11,8.462 C11.847,7.074 13.338,6.26 15.083,6.26 C17.912,6.26 20,7.986 20,11.558 L20,20 L16,20 L16,13.001 C16,11.081 15.153,10.01 13.634,10.01 C11.981,10.01 11,11.126 11,13.001 L11,20 L7,20 Z" />
    </svg>
  )
}

const socials = [
  { label: 'Email', href: '#contact', Icon: EmailIcon, external: false },
  { label: 'GitHub', href: 'https://www.github.com/nitinma2', Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitinma2/', Icon: LinkedInIcon, external: true },
]

const yearsOfExperience = new Date().getFullYear() - 2014

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        {/* ── Main three-column grid ── */}
        <div className={styles.grid}>
          {/* Left — greeting, name, tagline */}
          <div className={styles.left}>
            <p className={styles.greeting}>Hello world, I&apos;m</p>
            <h1 className={styles.name}>
              Nitin
              <br />
              Mathew.
            </h1>
            <p className={styles.tagline}>
              Just a tall adrenaline junkie who likes to code when I&apos;m not working on my
              posture.
            </p>
          </div>

          {/* Socials — separate grid item so mobile can reorder independently */}
          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={styles.socialIcon}
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          {/* Center — photo */}
          <div className={styles.center}>
            <div className={styles.photoRing}>
              <img
                src={headshot}
                alt="Nitin Mathew"
                width="380"
                height="380"
                fetchPriority="high"
                className={styles.photo}
              />
            </div>
          </div>

          {/* Right — stats */}
          <div className={styles.right}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{yearsOfExperience}</span>
                <span className={styles.statLabel}>
                  Years
                  <br />
                  Coding
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>16</span>
                <span className={styles.statLabel}>
                  Countries
                  <br />
                  Travelled
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>NA</span>
                <span className={styles.statLabel}>
                  Unhappy
                  <br />
                  Clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom — scroll arrow ── */}
        <div className={styles.bottom}>
          <a href="#portfolio" className={styles.scrollIndicator} aria-label="Scroll to portfolio">
            <span className={styles.scrollArrow} />
          </a>
        </div>
      </div>
    </section>
  )
}
