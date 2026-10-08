import NeonFrame from '../components/NeonFrame';
import styles from '../styles/FrontendProfile.module.css';

function FrontendProfile() {
    return (
        <section className={styles.frontendProfileSection}>
            <h2>Frontend Profile</h2>
                <div className={styles.frontendProfileContainer}>
                    <NeonFrame> 
                        <p>Frontend skills and experience</p> 
                    </NeonFrame>
                </div>
        </section>
    );
}

export default FrontendProfile;