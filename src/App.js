import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <About/>
     <Experience/>
     <Projects/>
    </div>
  );
}

export default App;
