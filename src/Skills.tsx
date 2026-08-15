const capabilities = [
  { number:"01", title:"Interface systems", description:"I turn product requirements into reusable component systems that stay coherent as screens, states, and teams grow.", tools:["React","Next.js","Vue","TypeScript"] },
  { number:"02", title:"Visual precision", description:"I care about rhythm, proportion, typography, responsive behaviour, and the details that make implementation feel authored rather than assembled.", tools:["CSS","Tailwind","Responsive design","Motion"] },
  { number:"03", title:"Product reliability", description:"Accessibility, API states, performance, testing, and deployment are part of the interface quality—not tasks reserved for the end.", tools:["Accessibility","API integration","Testing","Git / GitHub"] },
];

const Skills=()=> <section id="skills" className="dossier-section approach-section">
  <div className="section-rail"><span>01</span><p>Approach</p></div>
  <div className="section-body">
    <header className="dossier-heading"><p className="micro-label">How I work</p><h2>Not just pages.<br/><em>Systems with intent.</em></h2><p>My best work sits where interface design and frontend engineering overlap.</p></header>
    <div className="capability-bands">
      {capabilities.map(item=><article className="capability-band" key={item.number}>
        <div className="capability-band__title"><span>{item.number}</span><h3>{item.title}</h3></div>
        <p>{item.description}</p>
        <div className="tool-line">{item.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
      </article>)}
    </div>
  </div>
</section>;
export default Skills;
