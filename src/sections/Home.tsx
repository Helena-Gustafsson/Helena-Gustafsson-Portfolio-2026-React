import CreativeImage from '../components/CreativeImage';
import styles from '../styles/Home.module.css';

function Home() { 
    return ( 
    <div className={styles.creativeImageContainer}> 
    <CreativeImage /> 
    </div> 
    ); 
} 

export default Home;