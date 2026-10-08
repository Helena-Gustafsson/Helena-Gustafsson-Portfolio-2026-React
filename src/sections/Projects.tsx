import {projectData} from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import NeonFrame from '../components/NeonFrame';
import { badgeMap } from '../data/bagdesData';

const filterTags = [
  'Alla',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'SCSS',
  'UX/UI',
  'Accessibility',
  'API',
  'LocalStorage',
  'GitHub'
];

function Projects() {
    return (
        <section> 
            <h2>Projekt</h2> 

            <div className={styles.filterContainer}>
                {filterTags.map((tag) => {
                    const svgBadgePath = badgeMap[tag];
                    
                    return (
                        <button 
                            key={tag} className={styles.filterButton}type="button">
                            <img src={svgBadgePath} alt={`${tag} badge`} 
                            className={styles.badgeImage} />
            
                        </button>
                    );
                })}
            </div>

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