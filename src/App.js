import './App.css';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro/Intro.js';
import NavBar from './components/NavBar.js';
import Skills from './components/skills/Skills.js';
import Projects from './components/projects/Projects.js';
import ContactMe from './components/contact_me/ContactMe.js';
import Experience from './components/experience/Experience.js';



function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
