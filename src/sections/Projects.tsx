import {projectData} from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import NeonFrame from '../components/NeonFrame';

function Projects() {
    return (
        <section> 
            <h2>Projekt</h2> 

            <div className={styles.projectLayout}> 
                {projectData.map((project) => ( 
                    <NeonFrame key={project.id}>
                    <ProjectCard 
                    key={project.id} 
                    project={project} />
                    </NeonFrame>
                ))} 
            </div> 
        </section>
    );
}

export default Projects;