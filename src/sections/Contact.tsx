import NeonFrame from "../components/NeonFrame";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div>
            <h2>Kontakt</h2>

            <div className={styles.contactContainer}>
                <NeonFrame>
                    <ContactForm />
                </NeonFrame>

                <div className={styles.contactInfo}>
                    <h3>Kontakta mig!</h3>
                    <a href="mailto:helena.gustafsson.work@gmail.com">
                    <img src="public/contact-icons/email-address-svgrepo-com.svg" alt="Email Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/helena-gustafsson-46926852/" target="_blank" rel="noopener noreferrer">
                    <img src="public/contact-icons/linkedin-svgrepo-com.svg" alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/Helena-Gustafsson" target="_blank" rel="noopener noreferrer">
                    <img src="public/contact-icons/github-svgrepo-com.svg" alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;