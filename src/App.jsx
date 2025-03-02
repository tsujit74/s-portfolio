import "./App.css";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollIndicator from "./components/ScrollIndicator/Scrollindicator";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <>
      <ScrollIndicator/>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Certificate/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
