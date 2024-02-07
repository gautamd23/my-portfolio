import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <About/>
     <Experience/>
    </div>
  );
}

export default App;
