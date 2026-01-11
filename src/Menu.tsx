import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

interface MenuProps {
  darkMode: boolean;
  onToggle: () => void;
}

interface MenuItem {
  label: string;
  sectionId: string;
}

const menus: MenuItem[] = [
  { label: "Home", sectionId: "home" },
  { label: "Skills", sectionId: "skills" },
  { label: "Education", sectionId: "education" },
  { label: "Projects", sectionId: "projects" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Menu({ darkMode, onToggle }: MenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Box
      className="fade-in"
      sx={{
        position: "relative",
        backdropFilter: "blur(24px)",
        background: darkMode
          ? "linear-gradient(135deg, rgba(12, 74, 110, 0.4), rgba(7, 89, 133, 0.4))"
          : "linear-gradient(135deg, rgba(224, 242, 254, 0.6), rgba(186, 230, 253, 0.6))",
        border: darkMode
          ? "1px solid rgba(56, 189, 248, 0.3)"
          : "1px solid rgba(2, 132, 199, 0.2)",
        borderRadius: 3,
        boxShadow: darkMode
          ? "0 8px 32px rgba(56, 189, 248, 0.15)"
          : "0 8px 32px rgba(2, 132, 199, 0.15)",
        p: 3,
        width: "100%",
        minHeight: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        className="gradient-text"
        onClick={() => scrollToSection("home")}
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          fontSize: "1.5rem",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        IH
      </Typography>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden cursor-pointer">
        <IconButton
          onClick={onToggle}
          sx={{
            color: darkMode ? "#7DD3FC" : "#0284C7",
            transition: "transform 0.3s ease",
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton
          onClick={handleMenu}
          sx={{
            color: darkMode ? "#7DD3FC" : "#0284C7",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "rotate(90deg)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box
          className="fade-in"
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            mt: 2,
            background: darkMode
              ? "linear-gradient(135deg, rgba(12, 74, 110, 0.95), rgba(7, 89, 133, 0.95))"
              : "linear-gradient(135deg, rgba(224, 242, 254, 0.95), rgba(186, 230, 253, 0.95))",
            backdropFilter: "blur(20px)",
            border: darkMode
              ? "1px solid rgba(56, 189, 248, 0.3)"
              : "1px solid rgba(2, 132, 199, 0.3)",
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            zIndex: 50,
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            py: 4,
            px: 2,
          }}
        >
          {menus.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.sectionId}`}
              className="font-bold text-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                color: darkMode ? "#7DD3FC" : "#0284C7",
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(menu.sectionId);
                setMenuOpen(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? "#BAE6FD" : "#0EA5E9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? "#7DD3FC" : "#0284C7";
              }}
            >
              {menu.label}
            </a>
          ))}

          <a
            href="#contact"
            className="font-bold rounded-lg px-6 py-2 transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #38BDF8, #0EA5E9, #0284C7)",
              backgroundSize: "200% 200%",
              color: "#ffffff",
              animation: "gradientShift 3s ease infinite",
              padding: "0.5rem 1rem",
              textDecoration: "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
              setMenuOpen(false);
            }}
          >
            Hire Me
          </a>
        </Box>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6 items-center">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.sectionId}`}
              className="font-bold text-lg transition-all duration-300 relative group cursor-pointer"
              style={{
                color: darkMode ? "#7DD3FC" : "#0284C7",
                textDecoration: "none",
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(menu.sectionId);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = darkMode ? "#BAE6FD" : "#0EA5E9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = darkMode ? "#7DD3FC" : "#0284C7";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {menu.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #38BDF8, #0EA5E9)",
                }}
              ></span>
            </a>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-bold rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #38BDF8, #0EA5E9, #0284C7)",
            backgroundSize: "200% 200%",
            color: "#ffffff",
            animation: "gradientShift 3s ease infinite",
            boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
            padding: "0.5rem 1rem",
            textDecoration: "none",
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(2, 132, 199, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(2, 132, 199, 0.3)";
          }}
        >
          Hire Me
        </a>

        <IconButton
          onClick={onToggle}
          sx={{
            color: darkMode ? "#7DD3FC" : "#0284C7",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "rotate(180deg) scale(1.1)",
            },
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </Box>
  );
}

export default Menu;
