import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import gitHubIcon from "../Images/github-logo-300x300.png";

const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

const ImageResizing = styled.img`
  height: 70px;
  width: 70px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="https://github.com/Michaelx626">
        <ImageResizing src={gitHubIcon}></ImageResizing>
      </Link>
      <p>Copyright © 2023: Designed and built by Michael Lin</p>
    </FooterContainer>
  );
}
