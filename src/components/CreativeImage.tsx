import styles from '../styles/CreativeImage.module.css';
import neonStyles from '../styles/NeonBorder.module.css';

function CreativeImage() { 
    return (
    <div className={styles.creativeImage}>
            <img className={neonStyles.neonBorder} src="/creative-image.png" alt="Creative Image" 
            width="1208" height="839" loading="lazy" />
    </div>
    );
}
    
export default CreativeImage;