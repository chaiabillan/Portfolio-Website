import './App.css';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Links from './Components/Links/Links';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Links />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
