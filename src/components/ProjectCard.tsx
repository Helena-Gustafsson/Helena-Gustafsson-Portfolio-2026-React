import type { ProjectType } from '../types/ProjectType';

type ProjectCardProps = {
  project: ProjectType;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
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