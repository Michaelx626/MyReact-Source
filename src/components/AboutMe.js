import React from "react";
import image from "../Images/IMG_4647.JPG";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 576px) {
    padding-bottom: 200px;
  }
`;

const ImageContainer = styled.img`
  border-radius: 200px;
  margin-top: 20px;

  @media screen and (min-width: 576px) {
    height: 30%;
    width: 30%;
  }
`;

const TextContainer = styled.div`
  margin-top: 100px;
`;

export default function AboutMe() {
  return (
    <AboutMeContainer>
      <TextContainer>
        <h2>
          Hello! My name is Michael Lin. I am a JavaScript FullStack Developer
          located in San Gabriel, California!
        </h2>
      </TextContainer>
      <ImageContainer src={image} alt="Picture of Me" />
    </AboutMeContainer>
  );
}
