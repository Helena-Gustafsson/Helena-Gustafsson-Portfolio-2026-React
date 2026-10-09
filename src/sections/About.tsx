import NeonFrame from "../components/NeonFrame";
import styles from "../styles/About.module.css";

function About() { 
    return (
    <section className={styles.aboutSection}>
      <h2>Om mig</h2>
      
      <div className={styles.aboutContainer}>
        
        <NeonFrame>
          <div className={styles.aboutContent}>
            <div className={styles.profileImageContainer}>
              <img className={styles.profileImage} src="public/Helena_profile_pic-dark-2026.08.11.png" alt="Helena Gustafsson" />
            </div>
            <div className={styles.aboutTextContent}>
              <h3 className={styles.aboutTitle}>Vem är jag?</h3>
              <p className={styles.aboutText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className={styles.aboutText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </NeonFrame>
      </div>
    </section>
  );
}

export default About;