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

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-6" style={{ marginBottom: "2rem" }} >
      <h2
        className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 gradient-text "
        style={{ animation: "fadeIn 0.8s ease-out", paddingBottom: "2rem" }}
      >
        Frontend Skills
      </h2>

      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`skill-badge ${darkMode ? "skill-badge-dark" : "skill-badge-light"}`}
            style={{
              animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
            }}
          >
            <div className="skill-icon-wrapper">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<span class="skill-fallback">${skill.name.charAt(0)}</span>`;
                  }
                }}
              />
            </div>
            <span className={`skill-label ${darkMode ? "text-sky-300" : "text-sky-700"}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
