import './App.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Hero from './Components/Hero/Hero';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Resume />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
