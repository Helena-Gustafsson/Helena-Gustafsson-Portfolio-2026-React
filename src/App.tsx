import "./App.css"
import { useState } from "react"; 
import Navbar from "./components/Navbar"; 
import Home from "./sections/Home"; 
import About from "./sections/About"; 
import FrontendProfile from "./sections/FrontendProfile"; 
import LIA from "./sections/LIA"; import Projects from "./sections/Projects"; 
import CV from "./sections/CV"; import Contact from "./sections/Contact"; 
import { motion } from "framer-motion";


function App() { 
  
  const [activeSection, setActiveSection] = useState("home"); 
  return ( 
  <>
  <header>
        <Navbar setActiveSection={setActiveSection} />
  </header>
  <main className="pageContainer">
 
  <motion.div
  className="intro-blob"
  initial={{
    x: 600,
    y: 200,
    scale: 0.3,
    opacity: 0.5,
  }}
  animate={{
    x: [-600 + 1200, -220, -220],
    y: [200, -110, -110],
    scale: [0.3, 1.3, 2.5],
    opacity: [0.5, 1, 0],
  }}
  transition={{
    duration: 7,
    times: [0, 0.45, 1],
    ease: "linear",
  }}
/>

    <motion.h1
    initial={{ scale: 0., opacity: 0 }}
    animate={{ scale: [0.9, 1.2, 1], opacity: [0, 1] }}
    transition={{
      delay: 3.5,
      duration: 3,
    }}
    >
      Helena Gustafsson
    </motion.h1>

      {activeSection === "home" && <Home />} 
      {activeSection === "about" && <About />} 
      {activeSection === "frontend" && <FrontendProfile />} 
      {activeSection === "lia" && <LIA />} 
      {activeSection === "projects" && <Projects />} 
      {activeSection === "cv" && <CV />} 
      {activeSection === "contact" && <Contact />} 

  </main> 
  </>
  ); 
} 
export default App;
