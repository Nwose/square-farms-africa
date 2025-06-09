import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import VisionMission from "./components/VIsionMission";

function App() {
  return (
    <div className="over-flow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
