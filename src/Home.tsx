import Hannah from "./assets/Images/Ih.png";
import { projects } from "./data/projects";

const Home = () => {
  return (
    <main id="home" className="hero">
      <div className="hero-index section-index" aria-hidden="true">00</div>

      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="kicker"><span className="status-dot" />Available for selected opportunities</p>
          <h1>
            Frontend craft with <em>clarity,</em> character &amp; code.
          </h1>
          <p className="hero-lead">
            I’m Iranloye Hannah, a frontend engineer who turns product ideas into responsive, accessible interfaces that feel deliberate from the first click to the smallest interaction.
          </p>

          <div className="hero-actions">
            <a className="action-link action-link--solid" href="#projects">Explore my work <span>↘</span></a>
            <a className="action-link" href="#contact">Start a conversation <span>→</span></a>
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
          <div className="portrait-stamp" aria-hidden="true">UI<br />/26</div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-fact">
          <strong>{String(projects.length).padStart(2, "0")}</strong>
          <span>Selected builds<br />in the archive</span>
        </div>
        <div className="hero-fact">
          <strong>React</strong>
          <span>TypeScript, Next.js<br />&amp; modern CSS</span>
        </div>
        <div className="hero-fact hero-fact--wide">
          <span>My approach</span>
          <p>Structure first. Strong typography. Useful motion. Responsive behaviour that is designed—not patched in later.</p>
        </div>
      </div>

      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          <span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Next.js</span><i>✦</i><span>Accessibility</span><i>✦</i><span>Responsive UI</span><i>✦</i><span>Interaction</span><i>✦</i>
          <span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Next.js</span><i>✦</i><span>Accessibility</span><i>✦</i><span>Responsive UI</span><i>✦</i><span>Interaction</span><i>✦</i>
        </div>
      </div>
    </main>
  );
};

export default Home;
