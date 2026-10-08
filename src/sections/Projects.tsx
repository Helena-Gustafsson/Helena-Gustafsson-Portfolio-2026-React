import {projectData} from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import NeonFrame from '../components/NeonFrame';
import { badgeMap } from '../data/bagdesData';
import { useState } from 'react';

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

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {

        if (tag === 'Alla') {
            setSelectedTags([]);
            return;
        }

        const isAlreadySelected = selectedTags.includes(tag);

        if (isAlreadySelected) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            const newSelectedTags = [...selectedTags, tag];
            setSelectedTags(newSelectedTags);
        }
    };

    return (
        <section> 
            <h2>Projekt</h2> 

            <div className={styles.filterContainer}>
                {filterTags.map((tag) => {
                    const svgBadgePath = badgeMap[tag];

                    const isBadgeSelected = selectedTags.includes(tag);
                    
                    return (
                        <button 
                            key={tag} 
                            className={`${styles.filterButton} ${isBadgeSelected ? styles.selectedButton : ''}`} 
                            type="button"
                            onClick={() => handleTagClick(tag)} 
                        >
        
                            <img src={svgBadgePath} alt={`${tag} badge`} className={styles.badgeImage} />
                        </button>
                    );
                })}
            </div>

            <div className={styles.projectLayout}> 
                {projectData.map((project) => ( 
                    <NeonFrame key={project.id}>
                        <ProjectCard project={project} />
                    </NeonFrame>
                ))} 
            </div> 

        </section>
    );
}

export default Projects;