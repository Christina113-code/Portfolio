import HeroSection from './Sections/HeroSection';
import Projects from './Sections/Projects';
import SkillsSection from './Sections/SkillsSection';
import AboutMe from './Sections/AboutMe';
import ContactMe from './Sections/ContactMe';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Sections/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <SkillsSection/>
   <AboutMe/>
   <Projects />
   {/* <ContactMe/> */}
    <Footer/>
   </>
  );
}

export default App;
