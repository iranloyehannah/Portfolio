import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuProps { darkMode: boolean; onToggle: () => void; }
const links = [
  { label: "Approach", href: "#skills", number: "01" },
  { label: "Background", href: "#education", number: "02" },
  { label: "Work", href: "#projects", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

function Menu({ darkMode, onToggle }: MenuProps) {
  const [open,setOpen]=useState(false);
  return <header className="masthead">
    <a className="masthead-brand" href="#home" onClick={()=>setOpen(false)} aria-label="Iranloye Hannah, home">
      <strong>Iranloye Hannah</strong><span>Frontend Engineer</span>
    </a>
    <p className="masthead-note">Portfolio / selected work / 2026</p>
    <nav className="masthead-links" aria-label="Primary navigation">
      {links.map(link=><a key={link.href} href={link.href}><sup>{link.number}</sup>{link.label}</a>)}
    </nav>
    <div className="masthead-actions">
      <button className="theme-switch" onClick={onToggle} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>{darkMode?<Brightness7Icon fontSize="small"/>:<Brightness4Icon fontSize="small"/>}</button>
      <button className="menu-switch" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={open}>{open?<CloseIcon/>:<MenuIcon/>}</button>
    </div>
    <div className={`mobile-drawer ${open?"is-open":""}`}>
      {links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}><span>{link.number}</span>{link.label}</a>)}
    </div>
  </header>;
}
export default Menu;
