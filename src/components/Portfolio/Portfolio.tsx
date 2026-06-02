import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Work</h2>
        <p className={styles.sub}>A selection of projects I&apos;ve built.</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
