import Hannah from "./assets/Images/Ih.png";
import { projects } from "./data/projects";

const Home = () => {
  return (
    <main id="home" className="hero">
      <div className="hero-index section-index" aria-hidden="true">00</div>

      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="kicker"><span className="status-dot" />Frontend engineer · React / Next.js / TypeScript</p>

          <h1 className="hero-title">
            I make complex products
            <span className="hero-title__accent">feel obvious.</span>
          </h1>

          <p className="hero-lead">
            I turn product ideas into fast, accessible interfaces with strong visual judgment and production-minded code — the kind of frontend work that feels clear to users and dependable to teams.
          </p>

          <div className="hero-actions">
            <a className="action-link action-link--solid" href="#projects">View selected work <span>↘</span></a>
            <a className="action-link" href="#contact">Discuss a role or project <span>→</span></a>
          </div>
        </div>

        <div className="hero-portrait reveal reveal-delay">
          <div className="portrait-accent" aria-hidden="true" />
          <figure className="portrait-figure">
            <img src={Hannah} alt="Iranloye Hannah, frontend engineer" />
            <figcaption>
              <span>Lagos · Nigeria</span>
              <span>Open to remote</span>
            </figcaption>
          </figure>
          <div className="portrait-stamp" aria-hidden="true">FE<br />/26</div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-fact">
          <strong>{String(projects.length).padStart(2, "0")}</strong>
          <span>Selected builds<br />in the archive</span>
        </div>
        <div className="hero-fact">
          <strong>React</strong>
          <span>Next.js, TypeScript<br />&amp; modern CSS</span>
        </div>
        <div className="hero-fact hero-fact--wide">
          <span>What I bring</span>
          <p>Product thinking, design sensitivity and engineering discipline in the same frontend — from responsive systems and accessibility to the details that make a release feel finished.</p>
        </div>
      </div>

      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          <span>Product UI</span><i>✦</i><span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Next.js</span><i>✦</i><span>Accessibility</span><i>✦</i><span>Responsive Systems</span><i>✦</i><span>Interaction</span><i>✦</i>
          <span>Product UI</span><i>✦</i><span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Next.js</span><i>✦</i><span>Accessibility</span><i>✦</i><span>Responsive Systems</span><i>✦</i><span>Interaction</span><i>✦</i>
        </div>
      </div>
    </main>
  );
};

export default Home;
