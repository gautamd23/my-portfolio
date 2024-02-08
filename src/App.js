import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
