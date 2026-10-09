import NeonFrame from "../components/NeonFrame";

function Contact() {
    return (
        <div>
            <h2>Kontakt</h2>

            <div className="contact-container">
                <NeonFrame>
                    <form className="contact-form" action="https://formspree.io/f/mnqvzyqk" method="POST">
                        <div className="form-input">
                            <label htmlFor="name">Namn</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">E-post</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="message">Meddelande</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Skicka</button>
                    </form>
                </NeonFrame>

                <div className="contact-info">
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