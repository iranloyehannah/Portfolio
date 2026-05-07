import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import { projects } from "./data/projects";

interface MyProjectsProps {
  darkMode: boolean;
}

const MyProjects: React.FC<MyProjectsProps> = () => {
  return (
    <section id="projects" className="section">
      <div className="section-head section-head--split">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Builds that pushed a different part of my frontend craft.</h2>
        </div>
        <p>
          Each project explored a specific challenge — layout systems,
          interactive states, motion, or polished product UI. A snapshot of how
          I think and ship.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <article
            key={project.name}
            className="project-card fade-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="project-card__thumb">
              <span className="project-card__index">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <img src={project.thumbNail} alt={project.name ?? "Project"} />
            </div>

            <div className="project-card__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="chip-cluster">
                {project.tools?.map((tool) => (
                  <span key={`${project.name}-${tool}`} className="chip">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="project-card__actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <LaunchIcon sx={{ fontSize: 16 }} />
                    Live site
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link--ghost"
                  >
                    <CodeIcon sx={{ fontSize: 16 }} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
