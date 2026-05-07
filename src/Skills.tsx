interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  darkMode: boolean;
}

const skills: Skill[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
];

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="section">
      <div className="section-head section-head--split">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2>The stack I reach for when shipping product UI.</h2>
        </div>
        <p>
          A focused set of tools I use to move from a Figma frame to a polished,
          accessible, production-ready interface.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="skill-tile fade-up"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="skill-icon">
              <img
                src={skill.icon}
                alt={skill.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<span class="skill-fallback">${skill.name.charAt(0)}</span>`;
                  }
                }}
              />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
