import type { ProjectType } from '../types/ProjectType';
import styles from '../styles/ProjectCard.module.css';
import { badgeMap } from '../data/bagdesData';

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.projectCard}>
      
      <h3>{project.title}</h3>
      <img className={styles.projectImage} src={project.image} alt={project.title} />
      <div className={styles.projectDateType}>
        <p>{project.date}</p>
        <p className={styles.projectType}> {project.projectType === "individual" ? 
        ( <> <img src="public/Icon-individual.png" alt="Individual" /> Individuell uppgift </> ) : 
        ( <> <img src="public/Icon-group.png" alt="Group" /> Gruppuppgift </> )} </p>
      </div>
      <p><strong>Beskrivning:</strong> {project.description}</p>
      <p>{project.description}</p>
      {/* <p>{project.details}</p> TO SHOW WHEN CLICKED */}


      <div className={styles.badgeContainer}>
        {project.tags.map((technologyTag) => {
          
          const svgBadgePath = badgeMap[technologyTag];

          return (
            <div key={technologyTag} className={styles.badgeWrapper}>
              {svgBadgePath ? (
                <img 
                  src={svgBadgePath} 
                  alt={`${technologyTag} badge`} 
                  className={styles.badgeImage} 
                  title={technologyTag} 
                />
              ) : (
                <span className={styles.fallbackText}>{technologyTag}</span>
              )}
            </div>
          );
        })}
      </div>

      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <strong>Visa Projekt</strong>
      </a>
    </article>
  );
}

export default ProjectCard;