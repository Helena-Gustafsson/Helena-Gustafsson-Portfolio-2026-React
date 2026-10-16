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
              <img className={styles.profileImage} src="/Helena_profile_pic-dark-2026.08.11.png" alt="Helena Gustafsson" 
              height="2568" width="1570" loading="lazy" />
            </div>
            <div className={styles.aboutTextContentContainer}>
              <h3 className={styles.aboutTitle}>Vem är jag?</h3>

                <p className={styles.aboutText}>
                  Ge mig ett komplext problem, ett rum fullt av människor som inte känner varandra och en halvt omöjlig deadline, så kommer jag med största sannolikhet ha en färdig plan, minst tre genomförbara förslag och tio nya idéer, en färgkodad checklista och en lösning innan dagen är slut.
                </p>

                <p className={styles.aboutText}>
                  Jag är en <span className={styles.neonTurquoise}>kreativ initiativtagare, problemlösare och organisatör </span>som älskar att få saker att hända. Där andra ser kaos ser jag möjligheter, strukturer och lösningar som bara väntar på att upptäckas. Jag drivs av ständig utveckling, nyfikenhet och viljan att göra saker lite bättre än de var igår.
                </p>

                <p className={styles.aboutText}>
                  Min bakgrund är kanske inte den mest traditionella vägen in i techvärlden. Under åren har jag arbetat med juridik, administration,<span className={styles.neonGold}> koordinering och projektledning</span>, erfarenheter som lärt mig att navigera i komplexa situationer, hålla ihop flertalet delar samtidigt och kommunicera med människor på alla nivåer. Kombinationen av struktur, ansvarstagande och kreativitet har blivit en av mina absolut största styrkor.
                </p>

                <p className={styles.aboutText}>
                  <span className={styles.neonPink}>Jag älskar människor.</span> Att skapa relationer, bygga förtroende, få grupper att fungera bättre tillsammans och bidra med positiv energi. Att snabbt kunna läsa av situationer, förstå olika perspektiv och skapa kontakt med personer på väldigt olika nivåer är något jag utvecklat genom hela livet och som blivit en av mina starkaste tillgångar. Jag är ofta den som får saker att flyta, som knyter ihop lösa trådar, ser till att ingen tappas bort längs vägen, arbetar proaktivt med lösningar och håller fokus framåt när projekten börjar bli röriga.
                </p>

                <p className={styles.aboutText}>
                  Samtidigt är jag väldigt självständig. Om något behöver göras väntar jag sällan på att någon annan ska ta första steget. Jag tar gärna <span className={styles.neonPurple}>initiativ, tar ansvar och driver </span> arbetet framåt. Att få kombinera ett proaktivt och självständigt arbetssätt med nära samarbete är för mig det bästa av två världar.
                </p>

                <p className={styles.aboutText}>
                  När man har ansvarat för 40 bolag, hundratals uppgifter och fler parallella deadlines än vad som borde vara rimligt, lär man sig snabbt vikten av <span className={styles.neonTurquoise}>struktur och prioritering</span>. Jag är personen som skapar fungerande processer, ser både helhet och detaljer och säkerställer att ingenting faller mellan stolarna, samtidigt som jag behåller energi, driv och fokus på målet. Det finns en anledning till att jag ibland kallas <em className={styles.neonGold}>"Queen of Ticklists"</em> — färgkodade för visuell överblick? Ja, såklart!
                </p>

                <p className={styles.aboutTextEnd}>
                  Kort sagt: Jag älskar struktur, människor, nya idéer, att lära mig nytt och lösa svåra problem. Helst samtidigt!
                </p>

            </div>
          </div>
        </NeonFrame>
      </div>
    </section>
  );
}

export default About;