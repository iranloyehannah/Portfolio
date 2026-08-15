const education = [
  {
    year: "2024—25",
    title: "Diploma in Software Engineering — Frontend",
    place: "AltSchool Africa",
  },
  {
    year: "2023",
    title: "Certificate in Web Development",
    place: "SPtech Solutions",
  },
];

const practice = [
  "Built a capstone project for AltSchool diploma certification",
  "Shipped independent and collaborative frontend projects",
  "Practised modern React, TypeScript, Next.js and API integration",
  "Continued structured learning through FreeCodeCamp and Scrimba",
  "Recognised with a volunteering certificate at AltSchool Africa",
];

const EducationExperience = () => (
  <section id="education" className="editorial-section background-section">
    <div className="section-index" aria-hidden="true">02</div>
    <header className="section-heading section-heading--compact">
      <p className="kicker">Background</p>
      <h2>Learning in public. Building through <em>practice.</em></h2>
    </header>

    <div className="background-grid">
      <div className="education-timeline">
        <p className="column-label">Education</p>
        {education.map((item) => (
          <article className="education-item" key={item.title}>
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="practice-column">
        <p className="column-label">Work &amp; practice</p>
        <ol>
          {practice.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default EducationExperience;
