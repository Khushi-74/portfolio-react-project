import React from "react";

function Skills() {
  const skills = [
    "Docker",
    "Kubernetes",
    "Azure DevOps",
    "Linux",
    "GitHub Actions",
    "CI/CD",
    "React",
    "AWS",
    "Networking",
    "Helm"
  ];

  return (
    <section id="skills">
      <h2 className="heading">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
