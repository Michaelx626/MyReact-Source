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
  margin: 0 20px;
`;

const ProjectTitle = styled.div`
  color: green;
`;

const ImageResizing = styled.img`
  height: 50px;
  width: 50px;
`;

const Projects = [
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
  
];

export default function Portfolio() {
  return (
    <GridContainer>
      {Projects.map((project) => (
        <ProjectTitle key={project.title}>
          <h4>{project.title}</h4>
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
