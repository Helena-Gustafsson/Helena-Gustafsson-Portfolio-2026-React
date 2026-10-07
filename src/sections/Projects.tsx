import projectData from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

function Projects() {
    return (
        <div className={styles.projectLayout}>
            <h2>Projekt</h2>
            {projectData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default Projects;