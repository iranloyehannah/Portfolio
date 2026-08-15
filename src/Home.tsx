import Hannah from "./assets/Images/Ih.png";
import { projects } from "./data/projects";

const Home = () => (
  <main id="home" className="hero-stage">
    <div className="hero-topline"><span>Based in Lagos, Nigeria</span><span>Available for remote &amp; product teams</span></div>
    <div className="hero-composition">
      <div className="hero-title-block">
        <p className="micro-label">Frontend engineering / interface craft</p>
        <h1><span>Interfaces</span><span className="hero-line-indent">with a point</span><span>of <em>view.</em></span></h1>
      </div>
      <figure className="hero-photo">
        <img src={Hannah} alt="Iranloye Hannah, frontend engineer" />
        <figcaption><span>IH / 26</span><span>React · TypeScript · Next.js</span></figcaption>
      </figure>
      <aside className="hero-manifesto">
        <span className="manifesto-mark">↳</span>
        <p>I build product interfaces that are easy to understand, hard to forget, and precise enough to ship.</p>
        <a href="#projects">See selected work <span>↓</span></a>
      </aside>
    </div>
    <div className="proof-ledger">
      <div><strong>{String(projects.length).padStart(2,"0")}</strong><span>Selected builds</span></div>
      <div><strong>React</strong><span>Primary framework</span></div>
      <div><strong>UI + Code</strong><span>Design-aware engineering</span></div>
      <p>Responsive systems · accessible states · thoughtful motion · clean implementation</p>
    </div>
  </main>
);
export default Home;
