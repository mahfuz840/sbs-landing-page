import { createContext, useRef } from "react";

export const SectionContext = createContext('');

const scrollToSection = (e, sectionRef) => {
  e.preventDefault();

  window.scrollTo({
    top: sectionRef.current.offsetTop,
    behavior: "smooth",
  });
}

const SectionContextProvider = (props) => {
  const sectionHome = useRef(null);
  const sectionAbout = useRef(null);

  return (
    <SectionContext.Provider value={{ sectionHome, sectionAbout, scrollToSection }}>
      {props.children}
    </SectionContext.Provider>
  );
}

export default SectionContextProvider;