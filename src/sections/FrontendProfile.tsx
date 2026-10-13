import NeonFrame from '../components/NeonFrame';
import styles from '../styles/FrontendProfile.module.css';

function FrontendProfile() {
    return (
        <section className={styles.frontendProfileSection}>
            <h2>Frontend Profile</h2>
            
            <NeonFrame>
                <div className={styles.frontendProfileContainer}>
                    
                    <h3 className={styles.textBlockTitle}>Utbildning</h3>
                    <p className={styles.educationInfo}>
                        <strong>Utbildning:</strong> <span>Front End Developer - </span>
                        <a href="https://medieinstitutet.se/utbildningar/front-end-developer/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            MedieInstitutet
                        </a>
                    </p>
                    <p>
                        <strong>YH-program, 400 YH-poäng</strong> (December 2025 -Oktober 2027, Pågående)
                    </p>

                    
                    <div className={styles.contentContainer}>
                        
                        <div className={styles.textBlock}>
                            <h3 className={styles.textBlockTitle}>En bred teknisk grund med fokus på kvalitet</h3>
                            <p>
                                Jag utbildar mig till Frontendutvecklare på MedieInstitutet, en praktiskt inriktad 
                                utbildning med fokus på modern webbutveckling, UX-arbete och avancerad problemlösning. 
                                Genom utbildningen har jag byggt upp en gedigen teknisk bas för att skapa responsiva, 
                                välstrukturerade och tillgängliga digitala lösningar. Jag har ett starkt fokus på 
                                kodkvalitet och strävar alltid efter att skriva ren, refaktorerad och 
                                självdokumenterande kod i TypeScript.
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <h3 className={styles.textBlockTitle}>Från användarflöden till full CRUD-funktionalitet</h3>
                            <p>
                                Utbildningen täcker hela flödet i modern webbproduktion. På klientsidan fördjupar 
                                jag mig i JavaScript- och TypeScript-logik samt komponentbaserad utveckling i React. 
                                Jag har även tagit steget bakom kulisserna genom att utveckla backend-API:er i 
                                Node.js och integrera frontend-applikationer mot databaser. Det har gett mig 
                                praktisk erfarenhet av full CRUD-funktionalitet, validering och autentisering. 
                                Med ett starkt öga för form och funktion väver jag även in ett användarcentrerat 
                                arbetssätt - från målgruppsanalys och wireframes i Figma till färdig produkt 
                                som uppfyller lagkrav kring webbtillgänglighet (WCAG).
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <h3 className={styles.textBlockTitle}>Helena i ett nötskal</h3>
                            <p>
                                Förutom att vara en högpresterande utvecklarstudent kommer jag med många års värdefull 
                                arbetslivserfarenhet av att arbeta i komplexa, internationella och snabbrörliga miljöer. 
                                Jag är den där unika kombinationen av en kreativ idéspruta, en teknisk problemlösare 
                                och en superstrukturerad koordinator. Jag har lätt för att se helheten utan att tappa 
                                greppet om detaljerna. Till ett utvecklingsteam bidrar jag med ett stort eget 
                                ansvarstagande, proaktivitet och massor av positiv energi, värme och driv. 
                                Jag är en person som lär sig fort, älskar utmaningar och som inte bara tar emot 
                                kunskap - utan som också ger och vill göra skillnad på riktigt.
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <h3 className={styles.textBlockTitle}>Agila arbetssätt och professionella flöden</h3>
                            <p>
                                Att arbeta strukturerat och effektivt tillsammans är en central del av mitt arbetssätt. 
                                Genom kurser i arbetsmetodik och agilt projektarbete har jag praktisk erfarenhet av 
                                att arbeta i sprintar med backlog, dagliga standups och gemensamma leveranser i GitHub. 
                                Vi använder även AI-verktyg som en naturlig och professionell del i utvecklingsarbetet 
                                för att effektivisera processer, granska kod och bygga smartare digitala lösningar.
                            </p>
                        </div>

                    </div>
                </div>
            </NeonFrame>
        </section>
    );
}

export default FrontendProfile;