import React from "react";
import image from "../Images/IMG_4647.JPG";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: block;
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

const MarginContainer = styled.div`
  margin: 20px 100px;
`;

export default function AboutMe() {
  return (
    <AboutMeContainer>
      <ImageContainer src={image} alt="Picture of Me" />
      <TextContainer>
        <MarginContainer>
          <h2>About Me:</h2>
          <h5>
            Hello! My name is Michael Lin. I am a JavaScript FullStack Developer
            located in San Gabriel, California! I have taken a leap of faith and
            decided to change career paths in becoming a developer. I was
            inspired by many friends and families to persue my goals in the tech
            industry.
          </h5>
          <h5>
            My interest dated back in 2008 when I took a Computer Science course
            but didn't have the courage to step out of my comfort zone (Math and
            Science) until now! My main focus is to build really cool
            application both for the User experience and/or Developer
            experience.
          </h5>
          <h5>Feel free to reach out for any questions!</h5>
        </MarginContainer>
      </TextContainer>
    </AboutMeContainer>
  );
}
