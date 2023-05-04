import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div
          style={{
            paddingBottom: "100px",
            boxSizing: "border-box",
          }}
        >
          <HeaderContainer>
            <h2 style={{ padding: 20 }}>Michael Lin</h2>
            <NavBar />
          </HeaderContainer>
        </div>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
