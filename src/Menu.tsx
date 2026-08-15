import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuProps {
  darkMode: boolean;
  onToggle: () => void;
}

const links = [
  { label: "About", href: "#home" },
  { label: "Toolkit", href: "#skills" },
  { label: "Background", href: "#education" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Menu({ darkMode, onToggle }: MenuProps) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav-brand" href="#home" onClick={closeMenu}>
          <span className="nav-brand__mark">IH</span>
          <span className="nav-brand__copy">
            <strong>Iranloye Hannah</strong>
            <small>Frontend / Product UI</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Portfolio sections">
          {links.map((link, index) => (
            <a key={link.href} href={link.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onToggle} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </button>
          <button
            className="icon-button nav-menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map((link, index) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Menu;
