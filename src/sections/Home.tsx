import CreativeImage from '../components/CreativeImage';
import styles from '../styles/Home.module.css';

function Home() { 
    return ( 
    <>
    <div className={styles.creativeImageContainer}> 
    <CreativeImage /> 
    </div> 
    <div className={styles.titleDescriptionContainer}>
        <span>Frontend Developer</span>
        <span>Creative Designer</span>
        <span>UX / UI</span>
    </div>
    
    </> 
    ); 
} 

export default Home;