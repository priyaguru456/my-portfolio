import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Tailwind CSS, Bootstrap</li>
            <li>Node.js, Express.js</li>
            <li>SQL, MongoDB</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Collaboration & Teamwork</li>
            <li>Creativity</li>
            <li>Communication Skills</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
