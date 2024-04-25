import './App.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Resume />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
