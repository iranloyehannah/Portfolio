import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "./data/projects";

const MyProjects = () => (
  <section id="projects" className="editorial-section projects-section">
    <div className="section-index" aria-hidden="true">03</div>
    <header className="section-heading projects-heading">
      <div>
        <p className="kicker">Selected work</p>
        <h2>Projects where the details had to <em>earn their place.</em></h2>
      </div>
      <p>A mix of product interfaces, collaborative builds, and focused frontend challenges. Each one sharpened a different part of my craft.</p>
    </header>

    <div className="work-list">
      {projects.map((project, index) => {
        const hasLiveLink = Boolean(project.liveLink && project.liveLink !== "#");
        return (
          <article className="work-item" key={project.name ?? index}>
            <a
              className="work-media"
              href={hasLiveLink ? project.liveLink : project.repoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name ?? "project"}`}
            >
              <img src={project.thumbNail} alt={`${project.name ?? "Project"} preview`} />
              <span className="work-media__index">{String(index + 1).padStart(2, "0")}</span>
            </a>

            <div className="work-copy">
              <div className="work-title-row">
                <h3>{project.name}</h3>
                <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <p className="work-description">{project.description}</p>
              <div className="work-tools">
                {project.tools?.map((tool) => <span key={`${project.name}-${tool}`}>{tool}</span>)}
              </div>
              <div className="work-actions">
                {hasLiveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer"><LaunchIcon sx={{ fontSize: 17 }} /> Live site</a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noreferrer"><CodeIcon sx={{ fontSize: 17 }} /> Source</a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default MyProjects;
