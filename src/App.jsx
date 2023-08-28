import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Services />
      {/* <About />
      <Roadmap /> */}
    </>
  );
}

export default App;
