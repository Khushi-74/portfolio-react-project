import React from "react";

function Experience() {
  return (
    <section id="experience">
      <h2 className="heading">Experience</h2>

      <div className="card">
        <h3>Finastra</h3>
        <p>Associate Software Engineer</p>
        <p>Worked on Loan IQ production debugging, Docker deployments,
           Kubernetes, Helm and Azure DevOps pipelines.</p>
      </div>

      <br />

      <div className="card">
        <h3>Nutanix</h3>
        <p>SRE Intern</p>
        <p>Worked on Linux, Networking, Virtualization and internal tooling.</p>
      </div>
    </section>
  );
}

export default Experience;
