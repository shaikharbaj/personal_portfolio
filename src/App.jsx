import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home.js/Home';
import Project from './Components/Project/Project.jsx';
import Qualification from './Components/Qualification/Qualification';
import Scrollup from './Components/Scrollup/Scrollup';
import Skills from './Components/Skills/Skills';

function App() {
 
  return (
    <>
        <Header/>
        <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Project/>
            <Contact/>
        </main>
            <Footer/>
            <Scrollup/>
    </>
  )
}

export default App;
