import projectData from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

function Projects() {
    return (
        <section> 
            <h2>Projekt</h2> 

            <div className={styles.projectLayout}> 
                {projectData.map((project) => ( 
                    <ProjectCard 
                    key={project.id} 
                    project={project} 
                    />
                ))} 
            </div> 
        </section>
    );
}

export default Projects;