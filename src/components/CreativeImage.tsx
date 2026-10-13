import styles from '../styles/CreativeImage.module.css';
import neonStyles from '../styles/NeonBorder.module.css';

function CreativeImage() { 
    return (
    <div className={styles.creativeImage}>
            <img className={neonStyles.neonBorder} src="public/creative-image.png" alt="Creative Image" loading="lazy" />
    </div>
    );
}
    
export default CreativeImage;