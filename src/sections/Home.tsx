import CreativeImage from '../components/CreativeImage';
import styles from '../styles/Home.module.css';

function Home() { 
    return ( 
    <>
    <div className={styles.creativeImageContainer}> 
    <CreativeImage /> 
    </div> 
    <h3 className={styles.title}>Frontend Developer  |  Creative Designer | UX/UI</h3>
    </> 
    ); 
} 

export default Home;