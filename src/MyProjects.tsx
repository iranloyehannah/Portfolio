import { projects } from "./data/projects";

interface MyProjectsProps {
  darkMode: boolean;
}

const MyProjects: React.FC<MyProjectsProps> = ({ darkMode }) => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center py-16 md:py-24 px-4 md:px-6">
      <h2
        className="text-4xl md:text-5xl font-bold gradient-text"
        style={{
          animation: "fadeIn 0.8s ease-out",
          marginTop: "2rem"
        }}
      >
        My Projects
      </h2>
      <div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        style={{ marginTop: "2rem" ,
          // padding: "0 1rem"
        }}
      >
        {projects.map((project, idx) => (
          <article
            key={idx}
            className={`group card-container ${
              darkMode ? "card-dark" : "card-light"
            }`}
          >
            {/* Image Section */}
            <div className="card-image-wrapper">
              <img
                src={project.thumbNail}
                alt={project.name}
                className="card-image"
              />
              <div className="card-image-overlay"></div>
            </div>

            {/* Content Section */}
            <div className="card-content">
              <h3
                className={`card-title ${
                  darkMode ? "text-sky-300" : "text-sky-700"
                }`}
              >
                {project.name}
              </h3>

              <p
                className={`card-description ${
                  darkMode ? "text-sky-200" : "text-sky-600"
                }`}
              >
                {project.description}
              </p>

              <div className="card-tags">
                {project.tools?.map((tool, toolIdx) => (
                  <span
                    key={toolIdx}
                    className={`card-tag ${
                      darkMode ? "tag-dark" : "tag-light"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div
                className={`card-actions ${
                  darkMode ? "border-sky-500/20" : "border-sky-500/15"
                }`}
              >
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-button ${
                      darkMode ? "button-dark" : "button-light"
                    }`}
                  >
                    <span>Live Demo</span>
                    <span className="button-arrow">→</span>
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-button ${
                      darkMode ? "button-dark" : "button-light"
                    }`}
                  >
                    <span>Repo Link</span>
                    <span className="button-arrow">→</span>
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
