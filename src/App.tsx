import "./App.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Contact from "./Contact";
import EducationExperience from "./EducationExperience";
import Home from "./Home";
import Menu from "./Menu";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#a78bfa" : "#6d28d9",
          },
          secondary: {
            main: darkMode ? "#22d3ee" : "#0891b2",
          },
          background: {
            default: darkMode ? "#0a0a14" : "#f7f7fc",
          },
        },
        typography: {
          fontFamily:
            '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`site-shell ${darkMode ? "theme-dark" : "theme-light"}`}>
        <div className="site-grid" />
        <div className="site-orb site-orb-one" />
        <div className="site-orb site-orb-two" />
        <div className="site-orb site-orb-three" />

        <div className="site-frame">
          <Menu darkMode={darkMode} onToggle={() => setDarkMode((prev) => !prev)} />
          <Home darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <EducationExperience darkMode={darkMode} />
          <MyProjects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <footer className="site-footer">
            <span>© 2026 Iranloye Hannah — Frontend Engineer</span>
            <span>Built with React + Vite</span>
          </footer>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
