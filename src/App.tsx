import "./App.css";
import Menu from "./Menu"
import {
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import { useState, useMemo } from "react";
import Home from "./Home";
// import Balls from "./Balls"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <>
    {/* <div className="relative min-h-screen overflow-hidden">
      <Balls />
    </div> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: darkMode ?  "#0f172a" : "#f5f5f5",
            color: darkMode ? "#ffffff" : "#000000",
            py: 2,

            px: 4,
            position: "relative",
            zIndex : 10,

          }}
        >

          <Menu darkMode={darkMode} onToggle={handleToggle} />
        <div className="mt-8">
          <Home  darkMode={darkMode}/>
        </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
