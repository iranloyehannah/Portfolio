const capabilities = [
  {
    number: "01",
    title: "Interface engineering",
    description: "Building component-driven interfaces that remain clear, fast, and maintainable as products grow.",
    tools: ["React", "Next.js", "Vue", "TypeScript"],
  },
  {
    number: "02",
    title: "Visual implementation",
    description: "Translating design intent into responsive layouts with strong rhythm, typography, motion, and detail.",
    tools: ["CSS", "Tailwind", "Responsive design", "Motion"],
  },
  {
    number: "03",
    title: "Product quality",
    description: "Treating accessibility, performance, API states, testing, and deployment as part of the interface—not afterthoughts.",
    tools: ["Accessibility", "API integration", "Testing", "Git / GitHub"],
  },
];

const Skills = () => (
  <section id="skills" className="editorial-section skills-section">
    <div className="section-index" aria-hidden="true">01</div>
    <header className="section-heading">
      <p className="kicker">Toolkit &amp; approach</p>
      <h2>I care about the <em>whole interface,</em> not just the component.</h2>
      <p>My stack is intentionally practical: modern frontend tools, backed by the fundamentals that make a product dependable.</p>
    </header>

    <div className="capability-list">
      {capabilities.map((item) => (
        <article className="capability-row" key={item.number}>
          <span className="capability-number">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="capability-tools">
            {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
