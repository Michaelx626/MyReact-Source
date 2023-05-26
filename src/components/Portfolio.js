import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import playButton from '../Images/play-button-icon-design-illustration-vector.webp';
import gitHubIcon from '../Images/github-logo-300x300.png';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin: 20px 20px;
`;

const ProjectTitle = styled.div`
  color: blue;
`;

const ImageResizing = styled.img`
  height: 50px;
  width: 50px;
`;

const Projects = [
  {
    title: "GearHub",
    github: "https://github.com/Michaelx626/GearHub",
    live: "https://serene-ridge-35528.herokuapp.com/",
  },
  {
    title: "AnswerHub",
    github: "https://github.com/Michaelx626/AnswerHub",
    live: "https://whispering-retreat-56820.herokuapp.com/login",
  },
  {
    title: "Film Filter",
    github: "https://github.com/Michaelx626/Film-Filter",
    live: "https://michaelx626.github.io/Film-Filter/index.html",
  },
  {
    title: "Tech Forum",
    github: "https://github.com/Michaelx626/Tech-Forum",
    live: "https://still-cove-86406.herokuapp.com/",
  },
  {
    title: "Note Recorder",
    github: "https://github.com/Michaelx626/Note-Recorder",
    live: "https://nameless-meadow-28770.herokuapp.com/",
  },
  {
    title: "Comapny-Portrait-Generator",
    github: "https://github.com/Michaelx626/Company-Portrait-Generator",
    live: "https://michaelx626.github.io/Company-Portrait-Generator/dist/index.html",
  },
  {
    title: "Weather Forecast Station",
    github: "https://github.com/Michaelx626/Weather-Forecast-Station",
    live: "https://michaelx626.github.io/Weather-Forecast-Station/index.html",
  },
  {
    title: "Daily Event Organizer",
    github: "https://github.com/Michaelx626/Daily-Event-Organizer",
    live: "https://michaelx626.github.io/Daily-Event-Organizer/index.html",
  },
  {
    title: "Coding Quizathon",
    github: "https://github.com/Michaelx626/Coding-Quizathon",
    live: "https://michaelx626.github.io/Coding-Quizathon/index.html",
  },
  {
    title: "Most-Secured-Password-Generator",
    github: "https://github.com/Michaelx626/Most-Secured-Password-Generator",
    live: "https://michaelx626.github.io/Most-Secured-Password-Generator/index.html",
  },
  {
    title: "E-Commerce_Database",
    github: "https://github.com/Michaelx626/E-Commerce_Database",
    live: "https://drive.google.com/file/d/1X2yTrgJn6ndlndTnMHKnCwLgve67702E/view",
  },
  {
    title: "Company-Control",
    github: "https://github.com/Michaelx626/Company-Control",
    live: "https://drive.google.com/file/d/1oOjftfX8gbfOBB-rOgCKVTLwGPDqiL6m/view",
  },
  {
    title: "README-Generator",
    github: "https://github.com/Michaelx626/README-Generator",
    live: "https://drive.google.com/file/d/1wg5LJRnbAwB2e4LCIu3iwXN9nYos_Bug/view",
  },
  {
    title: "Social-Database",
    github: "https://github.com/Michaelx626/Social-Database",
    live: "https://drive.google.com/file/d/1EdUULWmvrXGyvctqCScD8bBJOo8ATjq_/view",
  },
];

export default function Portfolio() {
  return (
    <GridContainer>
      {Projects.map((project) => (
        <ProjectTitle key={project.title}>
          <h4><u>{project.title}</u></h4>
          <Link to={project.github}>
            <ImageResizing src={gitHubIcon}></ImageResizing>
          </Link>
          <Link to={project.live}>
            <ImageResizing src={playButton}></ImageResizing>
          </Link>
        </ProjectTitle>
      ))}
    </GridContainer>
  );
}
