import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2 className="heading">Projects</h2>

      <div className="skills-grid">
        <div className="card">
          <h3>CI/CD Portfolio Deployment</h3>
          <p>
            Automated React portfolio deployment using GitHub Actions
            and Azure.
          </p>
        </div>

        <div className="card">
          <h3>Kubernetes Deployment</h3>
          <p>
            Containerized and deployed applications using Docker,
            Kubernetes and Helm.
          </p>
        </div>

        <div className="card">
          <h3>AI Log Analyzer</h3>
          <p>
            Built AI-assisted automation workflow for troubleshooting logs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
