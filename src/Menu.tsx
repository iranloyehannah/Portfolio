import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="nav fade-in">
      <button
        type="button"
        className="nav-brand"
        onClick={() => handleNav("home")}
        aria-label="Back to top"
      >
        <span className="nav-brand-mark">IH</span>
        <span className="nav-brand-name">Iranloye Hannah</span>
      </button>

      <ul className="nav-links">
        {menus.map((item) => (
          <li key={item.sectionId}>
            <a
              href={`#${item.sectionId}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.sectionId);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button
          type="button"
          className="nav-icon-btn"
          onClick={onToggle}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Brightness7Icon fontSize="small" />
          ) : (
            <Brightness4Icon fontSize="small" />
          )}
        </button>

        <a
          href="#contact"
          className="nav-cta nav-desktop-only"
          onClick={(e) => {
            e.preventDefault();
            handleNav("contact");
          }}
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="nav-icon-btn nav-mobile-only"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-panel">
          {menus.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.sectionId);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNav("contact");
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}

export default Menu;
