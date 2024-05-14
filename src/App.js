import "./MediaQuery.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


// import Skills from "./pages/Skills";
// import Experience from "./pages/Experience";
// import Projects from "./pages/Projects";

function App() {
  const pageRefs = useRef({});
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar pageRefs={pageRefs} />
       
        <Routes>
          <Route path="/divyabenpatel-react-portfolio/" element={<Home  pageRefs={pageRefs} />} />
          
        </Routes>
        <Footer pageRefs={pageRefs} />
        {/* <Skills pageRefs={pageRefs} />
      <Experience pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} /> */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
