import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: black solid 2px;
  background-color: lightblue;
`;

const HtmlElement = styled.div`
  position: relative;
  max-height: 100vh;
`;

const MyName = styled.h2`
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <HtmlElement>
        <HeaderContainer>
          <MyName>Michael Lin</MyName>
          <NavBar />
        </HeaderContainer>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HtmlElement>
    </Router>
  );
}

export default App;
