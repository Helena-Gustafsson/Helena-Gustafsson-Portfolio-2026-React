import styles from '../styles/CreativeImage.module.css';

function CreativeImage() { 
    return (
    <div className={styles.creativeImage}>
        <img src="public/creative-image.png" alt="Creative Image" />
    </div>
    );
}
    
export default CreativeImage;