import { useRef } from "react";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar.";
import SectionContextProvider from "./context/SectionContext";

function App() {
  const sectionHome = useRef(null);
  const sectionAbout = useRef(null);

  return (
    <div className="App">
      <SectionContextProvider>
        <Navbar />
        <Home />
        <About />
      </SectionContextProvider>
    </div>
  );
}

export default App;
