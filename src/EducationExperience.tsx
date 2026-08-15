const education=[
  {year:"2024—25",title:"Diploma in Software Engineering — Frontend",place:"AltSchool Africa"},
  {year:"2023",title:"Certificate in Web Development",place:"SPtech Solutions"},
];
const practice=["Built a capstone project for AltSchool diploma certification","Shipped independent and collaborative frontend projects","Practised modern React, TypeScript, Next.js and API integration","Continued structured learning through FreeCodeCamp and Scrimba","Recognised with a volunteering certificate at AltSchool Africa"];

const EducationExperience=()=> <section id="education" className="dossier-section history-section">
  <div className="section-rail"><span>02</span><p>Background</p></div>
  <div className="section-body history-body">
    <header className="dossier-heading dossier-heading--small"><p className="micro-label">Experience ledger</p><h2>Built through study.<br/><em>Sharpened through shipping.</em></h2></header>
    <div className="history-ledger">
      <div className="history-column"><p className="ledger-label">Education</p>{education.map(item=><article className="ledger-entry" key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.place}</p></div></article>)}</div>
      <div className="history-column"><p className="ledger-label">Practice log</p>{practice.map((item,index)=><article className="practice-entry" key={item}><span>{String(index+1).padStart(2,"0")}</span><p>{item}</p></article>)}</div>
    </div>
  </div>
</section>;
export default EducationExperience;
