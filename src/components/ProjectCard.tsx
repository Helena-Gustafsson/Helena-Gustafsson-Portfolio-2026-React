import type { ProjectType } from '../types/ProjectType';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>{project.date}</p>
      <p>{project.projectType}</p>
      <p>{project.description}</p>
      
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;