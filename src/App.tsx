import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import EducationExperience from "./EducationExperience";
import Home from "./Home";
import Menu from "./Menu";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [darkMode]);

  return (
    <div className="site-shell">
      <div className="site-texture" aria-hidden="true" />
      <div className="site-frame">
        <Menu darkMode={darkMode} onToggle={() => setDarkMode((value) => !value)} />
        <Home />
        <Skills />
        <EducationExperience />
        <MyProjects />
        <Contact />
        <footer className="site-footer">
          <span>© 2026 Iranloye Hannah</span>
          <span>Frontend engineer · Lagos, Nigeria</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
