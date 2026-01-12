interface EducationExperienceProps {
  darkMode: boolean;
}

const EducationExperience: React.FC<EducationExperienceProps> = ({
  darkMode,
}) => {
  const courses = [
    "HTML, CSS, and JavaScript",
    "Vue",
    "Next.js",
    "React",
    "TypeScript",
    "Git and GitHub",
    "Responsive Web Design",
    "UI/UX Design Principles",
    "Web Accessibility",
    "Testing and Debugging",
    "Deployment and Hosting",
    "API Integration",
    "Performance Optimization",
    "Web Security Best Practices",
  ];

  const workExperience = [
    "Completed multiple coding challenges and personal projects",
    "Worked on personal projects to build a portfolio",
    "Participated in hands-on learning through platforms like FreeCodeCamp and Scrimba",
    "Built capstone project for diploma certification for AltSchool",
    "Received a certificate of volunteering at AltSchool Africa"
  ];

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-6"
      style={{ marginBottom: "2rem" }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* Education Card */}
        <div
          className={`education-card ${darkMode ? "card-dark" : "card-light"}`}
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <div className="card-header">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="icon-wrapper"
                style={{
                  background: darkMode
                    ? "rgba(56, 189, 248, 0.2)"
                    : "rgba(186, 230, 253, 0.5)",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📚</span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: darkMode ? "#7DD3FC" : "#0284C7",
                }}
              >
                Education
              </h3>
            </div>
          </div>

          <div className="card-content">
            <div className="mb-6">
              <h4
                className="text-lg md:text-xl font-semibold mb-2"
                style={{
                  color: darkMode ? "#BAE6FD" : "#0369A1",
                }}
              >
                Diploma in Software Engineering (Frontend)
              </h4>
              <p
                className="text-base"
                style={{
                  color: darkMode ? "#BAE6FD" : "#075985",
                  opacity: 0.9,
                }}
              >
                AltSchool Africa (2024/25)
              </p>
            </div>

            <div className="mb-6">
              <h4
                className="text-lg md:text-xl font-semibold mb-2"
                style={{
                  color: darkMode ? "#BAE6FD" : "#0369A1",
                }}
              >
                Certificate in Web Development
              </h4>
              <p
                className="text-base"
                style={{
                  color: darkMode ? "#BAE6FD" : "#075985",
                  opacity: 0.9,
                }}
              >
                SPtech solutions (2023)
              </p>
            </div>

            <div className="mt-auto">
              <h5
                className="text-base font-semibold mb-3"
                style={{
                  color: darkMode ? "#7DD3FC" : "#0284C7",
                }}
              >
                Relevant courses:
              </h5>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="course-tag"
                    style={{
                      background: darkMode
                        ? "rgba(56, 189, 248, 0.2)"
                        : "rgba(186, 230, 253, 0.5)",
                      color: darkMode ? "#BAE6FD" : "#0369A1",
                      border: darkMode
                        ? "1px solid rgba(56, 189, 248, 0.3)"
                        : "1px solid rgba(2, 132, 199, 0.3)",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Card */}
        <div
          className={`experience-card ${darkMode ? "card-dark" : "card-light"}`}
          style={{ animation: "fadeIn 0.8s ease-out 0.2s both" }}
        >
          <div className="card-header">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="icon-wrapper"
                style={{
                  background: darkMode
                    ? "rgba(56, 189, 248, 0.2)"
                    : "rgba(186, 230, 253, 0.5)",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💼</span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: darkMode ? "#7DD3FC" : "#0284C7",
                }}
              >
                Work Experience
              </h3>
            </div>
          </div>

          <div className="card-content">
            <ul className="space-y-4">
              {workExperience.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3"
                  style={{
                    color: darkMode ? "#BAE6FD" : "#075985",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <span
                    className="bullet-point"
                    style={{
                      color: darkMode ? "#38BDF8" : "#0284C7",
                      fontSize: "1.25rem",
                      lineHeight: "1.5",
                    }}
                  >
                    •
                  </span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
