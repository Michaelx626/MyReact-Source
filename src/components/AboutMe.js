import React from "react";
import image from '../Images/IMG_4647.JPG';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20;
  text-align: center;
`;

const ImageContainer = styled.img`
  border-radius: 200px;
`;

export default function AboutMe() {
  return (
    <AboutMeContainer>
      <h2>
        Hello! My name is Michael Lin. I am a JavaScript FullStack Developer
        located in San Gabriel, California!
      </h2>
      <ImageContainer src={image} alt="Picture of Me" />
    </AboutMeContainer>
  );
}
