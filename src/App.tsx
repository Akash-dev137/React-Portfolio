import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About";
import ShapeGrid from "./components/ui components/ShapeGrid";
import Skills from "./components/Skills";
import Project from "./components/Projects/Project";
import Certification from "./components/Certifications/Certification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="" style={{ background: "black" }}>
      <ShapeGrid
        speed={0.33}
        squareSize={80}
        borderColor="#ff0000"
        hoverFillColor="#ff0000"
        hoverTrailAmount={0}
        direction="left"
        shape="hexagon"
      />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
