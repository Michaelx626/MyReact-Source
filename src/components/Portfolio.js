import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          paddingBottom: "100px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 50,
          }}
        >
          <h2 style={{ padding: 20 }}>Michael Lin</h2>
          <NavBar />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: 20,
            textAlign: "center",
          }}
        >
          <h2>
            Hello! My name is Michael Lin. I am a JavaScript FullStack Developer
            located in San Gabriel, California!
          </h2>
          <img src="../Images/IMG_4647.JPG" alt="Picture of Me" />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
