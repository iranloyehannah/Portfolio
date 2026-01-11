import "./App.css";
import Menu from "./Menu";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";
import Home from "./Home";
import Skills from "./Skills";
import EducationExperience from "./EducationExperience";
import About from "./MyProjects";
import Contact from "./Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#38BDF8" : "#0284C7",
            light: darkMode ? "#7DD3FC" : "#0EA5E9",
            dark: darkMode ? "#0EA5E9" : "#0369A1",
          },
        },
      }),
    [darkMode]
  );
  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="app-container"
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(135deg, #0C4A6E 0%, #075985 50%, #0C4A6E 100%)"
            : "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #E0F2FE 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
          color: darkMode ? "#E0F2FE" : "#0C4A6E",
          py: 2,
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          zIndex: 10,
          transition: "all 0.5s ease-in-out",
        }}
      >
        {/* Animated background elements */}
        <div className="animated-background">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <Menu darkMode={darkMode} onToggle={handleToggle} />
        <div className="mt-8 fade-in">
          <Home darkMode={darkMode} />
        </div>
        <div className="section-divider"></div>
        <div className="fade-in-delay">
          <Skills darkMode={darkMode} />
        </div>
        <div className="section-divider"></div>
        <div className="fade-in-delay">
          <EducationExperience darkMode={darkMode} />
        </div>
        <div className="section-divider"></div>
        <div className="fade-in-delay">
          <About darkMode={darkMode} />
        </div>
        <div className="section-divider"></div>
        <div className="fade-in-delay">
          <Contact darkMode={darkMode} />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
