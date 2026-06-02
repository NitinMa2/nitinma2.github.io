import styles from './Contact.module.css'

const socials = [
  { label: 'GitHub', href: 'https://www.github.com/nitinma2' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitinma2/' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <div className={styles.sub}>
          <p>Have a project in mind or just want to say hello?</p>
          <p>My inbox is open.</p>
        </div>
        <p className={styles.email}>
          nitin&nbsp;mathew&nbsp;official&nbsp;[at]&nbsp;gmail&nbsp;[dot]&nbsp;com
        </p>
        <ul className={styles.socials}>
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.footer}>&copy; {new Date().getFullYear()} Nitin Mathew.</p>
      </div>
    </section>
  )
}
