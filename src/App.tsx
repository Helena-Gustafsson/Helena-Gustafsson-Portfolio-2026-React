import "./App.css"
import { useState } from "react"; 
import Navbar from "./components/Navbar"; 
import Home from "./sections/Home"; 
import About from "./sections/About"; 
import FrontendProfile from "./sections/FrontendProfile"; 
import LIA from "./sections/LIA"; import Projects from "./sections/Projects"; 
import CV from "./sections/CV"; import Contact from "./sections/Contact"; 


function App() { 
  
  const [activeSection, setActiveSection] = useState("home"); 
  return ( 
  <main className="pageContainer">
  <Navbar setActiveSection={setActiveSection} />
  <h1>Helena Gustafsson</h1>
  {activeSection === "home" && <Home />} 
  {activeSection === "about" && <About />} 
  {activeSection === "frontend" && <FrontendProfile />} 
  {activeSection === "lia" && <LIA />} {activeSection === "projects" && <Projects />} 
  {activeSection === "cv" && <CV />} {activeSection === "contact" && <Contact />} 
  </main> 
  ); 
} 
export default App;
