import NeonFrame from "../components/NeonFrame";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm";
import neonStyles from "../styles/NeonBorder.module.css";

function Contact() {
    return (
        <div>
            <h2>Kontakt</h2>

            <div className={styles.contactContainer}>
                <NeonFrame>
                    <ContactForm />
                </NeonFrame>

                <div className={styles.contactInfo}>

                     <p className={styles.contactText}>Jag är alltid öppen för nya möjligheter och samarbeten. Kontakta mig via e-post, LinkedIn eller GitHub!</p>
                    

                    <div className={styles.contactIcons}>

                        <a href="mailto:helena.gustafsson.work@gmail.com">
                        <img src="public/contact-icons/email-address-svgrepo-com.svg" alt="Email Icon"
                        className={`${styles.contactIconImg} ${neonStyles.neonHover}`}  />
                        </a>

                        <a href="https://www.linkedin.com/in/helena-gustafsson-46926852/" target="_blank" rel="noopener noreferrer">
                        <img src="public/contact-icons/linkedin-svgrepo-com.svg" alt="LinkedIn Icon"
                        className={`${styles.contactIconImg} ${neonStyles.neonHover}`}  />
                        </a>

                        <a href="https://github.com/Helena-Gustafsson" target="_blank" rel="noopener noreferrer">
                        <img src="public/contact-icons/github-svgrepo-com.svg" alt="GitHub Icon"
                        className={`${styles.contactIconImg} ${neonStyles.neonHover}`}  />
                        </a>

                    </div>

                   
                
                </div>
            </div>
        </div>
    );
}

export default Contact;