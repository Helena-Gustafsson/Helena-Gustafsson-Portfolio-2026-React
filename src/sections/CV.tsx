import styles from "../styles/CV.module.css";

function CV() {
  return (
    <section className={styles.cvSection}>
      <h2>CV</h2>

      {/* OPEN PDF */}
      <div className={styles.cvContent}>
        <a
        href="public/CV.FED25.HelenaGustafsson.26.10.07.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.openButton}
            >
          📄 Klicka här för att se och ladda ner PDF
        </a>
      </div>

      {/* DISPLAY CV images */}
        <div className={styles.cvImageContainer}>
     <a href="/Helena-Gustafsson-CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
          <img 
            src="public/CV-HG-sid1.png" 
            alt="Helena Gustafsson CV Sida 1" 
            className={styles.cvImage}
          />
          <img 
            src="public/CV-HG-sid2.png" 
            alt="Helena Gustafsson CV Sida 2" 
            className={styles.cvImage}
          />
        </a>
        </div>
    </section>
  );
}

export default CV;