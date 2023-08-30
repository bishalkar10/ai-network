import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Refer from "./components/Refer";

function App() {
  return (
    <div className="bg-[#060A14]">
      <Navbar />
      <Homepage />
      <About />
      <Roadmap />
      <Services />
      <Benefits />
      <Refer />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
