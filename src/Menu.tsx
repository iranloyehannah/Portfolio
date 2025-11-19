import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";

interface MenuProps {
  darkMode: boolean;
  onToggle: () => void;
}
const menus: string[]= ["Home", "About", "Projects"];
function Menu({ darkMode, onToggle }: MenuProps) {
  return (
    <>
      <Box
        sx={{
          backdropFilter: "blur(24px)",
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(255, 255, 255, 0.4)",

          border: darkMode
            ? // ? "1px solid rgba(255, 255, 255, 0.3)"
              "none"
            : "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          p: 3,
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: darkMode ? "#38BDF8" : "#0369A1",
          }}
        >
          IH
        </Typography>

        <div className="flex items-center gap-8">
          <Box
            component="ul"
            sx={{
              display: "flex",
              listStyle: "none",
              gap: 3,
              p: 0,
              m: 0,
              alignItems: "center",
            }}
          >
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className={`font-bold text-lg pointer transition duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "text-[#38BDF8] hover:text[#A5F3FC]"
                    : "text-[#000000] hover:text[#0369A1]"
                } `}
              >
                {menu}
              </Link>
            ))}
          </Box>

          <div className="ml-8">
            <Link
              to="/contact"
              className="bg-[#0369A1] text-white rounded-lg border-[#38BDF8] px-4 py-2"
            >
              Hire Me
            </Link>
          </div>

          <IconButton onClick={onToggle} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Box>
    </>
  );
}

export default Menu;
