import React, { useState } from "react";
import info from "../../../assets/info.svg";
import realistic from "../../../assets/realistic.svg";
import disney from "../../../assets/disney.svg";
import icon from "../../../assets/icon.svg";
import render from "../../../assets/render.svg";
import lineArt from "../../../assets/lineArt.svg";
import pixelArt from "../../../assets/pixelArt.svg";
import anime from "../../../assets/anime.svg";

const aiArtList = [
  {
    id: 1,
    title: "Icon",
    image: icon,
  },
  {
    id: 2,
    title: "Render",
    image: render,
  },
  {
    id: 3,
    title: "Line Art",
    image: lineArt,
  },
  {
    id: 4,
    title: "Pixel Art",
    image: pixelArt,
  },
  {
    id: 5,
    title: "Anime",
    image: anime,
  },
  {
    id: 6,
    title: "Icon",
    image: icon,
  },
];
const ModelsAndStyles = () => {
  const [activeModel, setActiveModel] = useState("Realistic");

  const handleModelClick = (model) => {
    setActiveModel(model);
  };

  return (
    <div className="main-models-and-styles">
      <div className="models-and-styles-title">
        <h2> Models & Styles </h2>
        <img src={info} alt="info" />
      </div>
      <div className="model-and-styles-container">
        <div
          className={`inner-model-and-styles ${
            activeModel === "Realistic" ? "active" : ""
          }`}
          onClick={() => handleModelClick("Realistic")}
        >
          <div className="model-and-style-text">
            <span>Model</span>
            <p>Realistic</p>
          </div>
          <img src={realistic} alt="models" />
        </div>
        <div
          className={`inner-model-and-styles ${
            activeModel === "Disney" ? "active" : ""
          }`}
          onClick={() => handleModelClick("Disney")}
        >
          <div className="model-and-style-text">
            <span>Style</span>
            <p>Disney</p>
          </div>
          <img src={disney} alt="models" />
        </div>
      </div>
      <div className="ai-art-list">
        {aiArtList?.map((art) => {
          return (
            <div className="inner-art-list" key={art.id}>
              <img src={art.image} alt={art.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModelsAndStyles;
