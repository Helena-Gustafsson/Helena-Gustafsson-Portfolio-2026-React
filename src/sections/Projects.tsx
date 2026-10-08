import {projectData} from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import NeonFrame from '../components/NeonFrame';
import { badgeMap } from '../data/bagdesData';
import { useState } from 'react';


/*FILTER TAGS - BADGES*/
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

    /*USESTATE FOR SELECTED TAGS AND HANDLE CLICKS*/
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

    /*FILTER PROJECTS BASED ON SELECTED TAGS*/
    const filteredProjects = selectedTags.length === 0 
        ? projectData 
        : projectData.filter((project) => {
            const matchingTags = project.tags.filter((tag) => 
                selectedTags.includes(tag));
            return matchingTags.length > 0;
        }
    );

    return (
        <section> 
            <h2>Projekt</h2> 
            <p className={styles.projectIntroText}>Här är projekt som jag har arbetat med under min utbildning som del av mina inlämningsuppgifter.</p>

            <div className={styles.filterContainer}>
                {filterTags.map((tag) => {
                    const svgBadgePath = badgeMap[tag];

                    const isBadgeSelected = tag === 'Alla' 
                    ? selectedTags.length === 0 
                    : selectedTags.includes(tag);
                    
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
                {filteredProjects.map((project) => ( 
                    <NeonFrame key={project.id}>
                        <ProjectCard project={project} />
                    </NeonFrame>
                ))} 
            </div> 

        </section>
    );
}

export default Projects;