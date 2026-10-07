import CreativeImage from '../components/CreativeImage';
import styles from '../styles/Home.module.css';

function Home() { 
    return ( 
    <>
    <div className={styles.creativeImageContainer}> 
    <CreativeImage /> 
    </div> 
    <h2 className={styles.title}>Frontend Developer  |  Creative Designer </h2>
    </> 
    ); 
} 

export default Home;