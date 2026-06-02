import { useEffect, useRef, useState } from 'react'
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const card = (
    <div ref={ref} className={`${styles.card} ${visible ? styles.visible : ''}`}>
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.title} loading="lazy" className={styles.image} />
        {project.url && <div className={styles.overlay}>View Project →</div>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {card}
      </a>
    )
  }

  return card
}
