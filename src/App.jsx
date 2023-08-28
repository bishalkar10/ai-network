import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#060A14]">
      <Navbar />
      <Homepage />
      <Services />
      <Contact />
      {/* <About />
      <Roadmap /> */}
    </div>
  );
}

export default App;
