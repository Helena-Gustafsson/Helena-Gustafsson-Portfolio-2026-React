//NAVBAR AS PLACEHOLDER - TO BE CHANGED

type NavbarProps = {
    setActiveSection: (section: string) => void;
};

function Navbar({ setActiveSection }: NavbarProps) {
    return (
        <nav>
            <ul>
                <li><button onClick={() => setActiveSection("home")}>Hem</button></li>
                <li><button onClick={() => setActiveSection("about")}>Om mig</button></li>
                <li><button onClick={() => setActiveSection("frontend")}>Frontend Profile</button></li>
                <li><button onClick={() => setActiveSection("projects")}>Projekt</button></li>
                <li><button onClick={() => setActiveSection("cv")}>CV</button></li>
                <li><button onClick={() => setActiveSection("lia")}>LIA</button></li>
                <li><button onClick={() => setActiveSection("contact")}>Kontakt</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;