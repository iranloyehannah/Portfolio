import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

interface EducationExperienceProps {
  darkMode: boolean;
}

const courses = [
  "HTML, CSS, JavaScript",
  "Vue",
  "Next.js",
  "React",
  "TypeScript",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX Principles",
  "Web Accessibility",
  "Testing & Debugging",
  "Deployment",
  "API Integration",
  "Performance",
  "Web Security",
];

const education = [
  {
    title: "Diploma in Software Engineering — Frontend",
    meta: "AltSchool Africa · 2024 / 25",
  },
  {
    title: "Certificate in Web Development",
    meta: "SPtech Solutions · 2023",
  },
];

const experience = [
  "Built a capstone project for AltSchool diploma certification",
  "Completed multiple coding challenges and personal builds",
  "Shipped portfolio projects across React, TypeScript, and Tailwind",
  "Hands-on learning through FreeCodeCamp and Scrimba",
  "Recognised with a certificate of volunteering at AltSchool Africa",
];

const EducationExperience: React.FC<EducationExperienceProps> = () => {
  return (
    <section id="education" className="section">
      <div className="section-head section-head--split">
        <div>
          <p className="eyebrow">Background</p>
          <h2>Where I&apos;ve been learning, building, and shipping.</h2>
        </div>
        <p>
          A mix of structured study and steady self-driven work — every project
          adds another layer to how I think about frontend craft.
        </p>
      </div>

      <div className="timeline-grid">
        <article className="glass-card fade-up">
          <div className="card-icon">
            <SchoolIcon fontSize="small" />
          </div>
          <h3 className="card-title">Education</h3>

          {education.map((entry) => (
            <div key={entry.title} className="timeline-entry">
              <h4>{entry.title}</h4>
              <span className="timeline-meta">{entry.meta}</span>
            </div>
          ))}

          <p className="chip-label">Relevant courses</p>
          <div className="chip-cluster">
            {courses.map((course) => (
              <span key={course} className="chip">
                {course}
              </span>
            ))}
          </div>
        </article>

        <article className="glass-card fade-up delay-2">
          <div className="card-icon">
            <WorkOutlineIcon fontSize="small" />
          </div>
          <h3 className="card-title">Work & practice</h3>

          <ul className="bullet-list">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default EducationExperience;
