import styles from '../styles/Navbar.module.css';
import { useState } from 'react';

type NavbarProps = {
    setActiveSection: (section: string) => void;
};

function Navbar({ setActiveSection }: NavbarProps) {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}

            <nav className={styles.navbar}>
                <button className={styles.menuButton} onClick={toggleMenu}> {isMenuOpen ? '✖' : '☰'} </button>
                
                    <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
                        <li><button className={styles.navButton} onClick={() => { setActiveSection("home"); setIsMenuOpen(false); }}>Hem</button></li>
                        <li><button className={styles.navButton} onClick={() => { setActiveSection("about"); setIsMenuOpen(false); }}>Om mig</button></li>
                        <li><button className={styles.navButton} onClick={() => { setActiveSection("frontend"); setIsMenuOpen(false); }}>Frontend Profile</button></li>
                        <li><button className={styles.navButton} onClick={() => { setActiveSection("projects"); setIsMenuOpen(false); }}>Projekt</button></li>
                        <li><button className={styles.navButton} onClick={() => { setActiveSection("cv"); setIsMenuOpen(false); }}>CV</button></li>
                    <li><button className={styles.navButton} onClick={() => { setActiveSection("lia"); setIsMenuOpen(false); }}>LIA</button></li>
                    <li><button className={styles.navButton} onClick={() => { setActiveSection("contact"); setIsMenuOpen(false); }}>Kontakt</button></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;