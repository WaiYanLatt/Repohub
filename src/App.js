import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import Story from "./views/pages/Story";
import Service from "./views/pages/Service";
import Contact from "./views/pages/Contact";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar  className="position-relative"/>
        <div className="switch">
          {/* <label>{theme === "light" ? `moon` : `sun`}</label> */}
           <div className="d-flex align-items-center">
           <i className="fa-solid fa-sun me-2"></i>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <i className="fa-solid fa-moon"></i>
           </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
