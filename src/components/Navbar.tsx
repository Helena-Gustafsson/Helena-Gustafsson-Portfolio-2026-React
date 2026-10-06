import styles from '../styles/Navbar.module.css';

type NavbarProps = {
    setActiveSection: (section: string) => void;
};

function Navbar({ setActiveSection }: NavbarProps) {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><button className={styles.navButton} onClick={() => setActiveSection("home")}>Hem</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("about")}>Om mig</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("frontend")}>Frontend Profile</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("projects")}>Projekt</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("cv")}>CV</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("lia")}>LIA</button></li>
                <li><button className={styles.navButton} onClick={() => setActiveSection("contact")}>Kontakt</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;