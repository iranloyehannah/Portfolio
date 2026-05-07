import { Typewriter } from "react-simple-typewriter";
import Hannah from "./assets/Images/Ih.png";
import { projects } from "./data/projects";

interface HomeProps {
  darkMode: boolean;
}

const focusAreas = [
  "Interface systems",
  "Responsive frontends",
  "Accessible flows",
];

const stats = [
  { value: `${projects.length}+`, label: "Shipped projects" },
  { value: "2024/25", label: "AltSchool diploma" },
  { value: "Remote", label: "Open to work" },
];

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <main id="home" className="hero">
      <div className="hero-copy fade-up">
        <span className="hero-badge">
          <span className="hero-badge-dot" />
          Available for new projects
        </span>

        <p className="eyebrow">Frontend Engineer · Lagos, Nigeria</p>

        <h1>
          Clean code. Smooth interfaces. Products that{" "}
          <span className="accent-word">ship</span>.
        </h1>

        <p className="hero-lead">
          I&apos;m Iranloye Hannah — I design and ship responsive React
          experiences with a strong eye for structure, motion, and the small
          details that make products feel finished.
        </p>

        <div className="hero-typing">
          <span className="hero-typing__label">Currently focused on</span>
          <span className="hero-typing__value">
            <Typewriter
              words={[
                "React frontends",
                "Customer-facing product UI",
                "Digital brand experiences",
                "Clean component systems",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Start a conversation
          </a>
        </div>

        <div className="hero-meta" aria-label="Focus areas">
          {focusAreas.map((item) => (
            <span key={item} className="hero-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-visual fade-up delay-2">
        <div className="portrait-halo" aria-hidden="true" />
        <div className="portrait-card">
          <div className="portrait-meta">
            <span>Portfolio · 2026</span>
            <span className="portrait-meta-tag">
              {darkMode ? "Night" : "Day"}
            </span>
          </div>

          <div className="portrait-frame">
            <img src={Hannah} alt="Iranloye Hannah" />
          </div>

          <div className="portrait-stats">
            {stats.map((item) => (
              <div key={item.label} className="portrait-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
