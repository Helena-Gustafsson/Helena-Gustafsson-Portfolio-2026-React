import styles from "../styles/CV.module.css";
import neonStyles from "../styles/NeonBorder.module.css";

function CV() {
  return (
    <section className={styles.cvSection}>

      {/* OPEN PDF */}
      <a href="/CV FED25D (sv) Helena Gustafsson 2026.10.07.pdf" target="_blank" rel="noopener noreferrer">
        <h2 className={`${styles.openCV} ${neonStyles.neonHover}`}>CV - Visa PDF</h2>
      </a>

      {/* DISPLAY CV images */}
        <div className={styles.cvImageContainer}>
     <a href="/CV FED25D (sv) Helena Gustafsson 2026.10.07.pdf" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
          <img 
            src="/CV-HG-sid1.png" 
            alt="Helena Gustafsson CV Sida 1" 
            className= {`${styles.cvImage} ${neonStyles.neonBorder}`}
            loading="lazy"
            width="1414" height="2000"
          />
      </a>
      <a href="/CV FED25D (sv) Helena Gustafsson 2026.10.07.pdf" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
          <img 
            src="/CV-HG-sid2.png" 
            alt="Helena Gustafsson CV Sida 2" 
             className= {`${styles.cvImage} ${neonStyles.neonBorder}`}
            loading="lazy"
            width="1414" height="2000"
          />
        </a>
        </div>
    </section>
  );
}

export default CV;