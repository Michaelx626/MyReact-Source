import React from "react";
import styled from "styled-components";

const frontEndMaterials = ["HTML", "CSS", "React", "JQuery"];

const backEndMaterials = [
  "Restful API (Web, Third-Party, Server-Side)",
  "Node",
  "Express",
  "Object-Oriented Programming (OOP)",
  "Object Relational Mapping (ORM)",
  "Model View Control (MVC)",
  "SQL",
  "NoSQL",
  "Progressive Web Application (PWA)",
  "MERN",
  "MongoDB",
];

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 20px;
`;

const MarginContainer = styled.div`
  margin-left: 20px;
  text-align: center;
`;

export default function Resume() {
  const handleDownload = () => {
    const url = "/resume";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
  };
  return (
    <>
      <MarginContainer>
        <p>
          Click Here to download{" "}
          <a href="/resume" onClick={handleDownload}>
            Resume
          </a>
        </p>
      </MarginContainer>
      <ResumeContainer>
        <div>
          <h3>Front-End JavaScript Proficiencies</h3>
          <ul>
            {frontEndMaterials.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
        <MarginContainer>
          <h3>Back-End JavaScript Proficiencies</h3>
          <ul>
            {backEndMaterials.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </MarginContainer>
      </ResumeContainer>
    </>
  );
}
