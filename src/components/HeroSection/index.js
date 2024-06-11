import React from "react";
import "./heroSection.css";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="main-hero-section">
      <h1>AI Art Generator</h1>
      <p>
        Create awe-inspiring masterpieces effortlessly and explore the endless
        possibilities of AI generated art. Enter a prompt, and choose a style,
        AI art generator bring your ideas to life!
      </p>
      <div className="input-button">
        <input type="text" placeholder="Enter prompt here..." />
        <button onClick={() => navigate("/generate-ai")}>Generate</button>
      </div>
    </div>
  );
};

export default HeroSection;
