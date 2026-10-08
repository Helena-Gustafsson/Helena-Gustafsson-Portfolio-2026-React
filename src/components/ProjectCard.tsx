import type { ProjectType } from '../types/ProjectType';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
  project: ProjectType;
};


//Replace icons with images from the public folder with the text "Individuell uppgift" or "Gruppuppgift" next to the icon. Use the following code for the projectType paragraph: 
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <div className={styles.projectDateType}>
        <p>{project.date}</p>
        <p className={styles.projectType}> {project.projectType === "individual" ? 
        ( <> <img src="public/Icon-individual.png" alt="Individual" /> Individuell uppgift </> ) : 
        ( <> <img src="public/Icon-group.png" alt="Group" /> Gruppuppgift </> )} </p>
      </div>
      <p>{project.description}</p>
      
      <ul>
        {project.tags.map((technologyTag) => (
          <li key={technologyTag}>{technologyTag}</li>
        ))}
      </ul>

      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <strong>Visa Projekt</strong>
      </a>
    </article>
  );
}

export default ProjectCard;