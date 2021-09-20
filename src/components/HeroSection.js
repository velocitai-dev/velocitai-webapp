import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div className="hero-container">
      <video src={props.video} autoPlay loop muted />
      <h1>{props.description}</h1>
    </div>
  );
}

export default HeroSection;
