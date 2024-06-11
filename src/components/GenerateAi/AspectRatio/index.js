import React, { useState } from "react";
import info from "../../../assets/info.svg";
import blackCamera from "../../../assets/black-camera.svg";
import orangeCamera from "../../../assets/orange-camera.svg";
import "../generate-ai.css";

const aspectRatios = [
  { ratio: "1:1", label: "Square" },
  { ratio: "4:3", label: "Portrait" },
  { ratio: "3:9", label: "Post" },
  { ratio: "3:2", label: "Reel" },
  { ratio: "4:2", label: "Cover" },
  // Add more aspect ratios as needed
];

const AspectRatio = () => {
  const [activeRatio, setActiveRatio] = useState("1:1");

  const handleAspectRatioClick = (ratio) => {
    setActiveRatio(ratio);
  };
  return (
    <div className="main-aspect-ratio-container">
      <div className="aspect-ratio-title">
        <h2> Aspect Ratio </h2>
        <img src={info} alt="info" />
      </div>
      <div className="aspect-ratio">
        {aspectRatios.map((item) => (
          <div
            key={item.ratio}
            className={`main-aspect-ratio ${
              activeRatio === item.ratio ? "active" : ""
            }`}
            onClick={() => handleAspectRatioClick(item.ratio)}
          >
            <div className="camera-ratio">
              <img
                src={activeRatio === item.ratio ? orangeCamera : blackCamera}
                alt="camera"
              />
              <span>{item.ratio}</span>
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AspectRatio;
