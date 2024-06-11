import React from "react";
import "./generate-ai.css";
import light from "../../assets/light.svg";
import mountains from "../../assets/mountains.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AspectRatio from "./AspectRatio";
import ModelsAndStyles from "./ModelsStyles";

const GenerateAi = () => {
  return (
    <div className="main-generate-ai">
      <div className="left-generate-ai">
        <h2>My Creation</h2>
        <hr className="horizantal-line" />
        <div className="my-collection">
          {[1, 2, 3, 5].map((item) => {
            return (
              <img
                key={item}
                className="my-collection-image"
                src={`https://cognise.art/media/generation_model/00000-1237872118.jpeg`}
                alt="ai-art"
              />
            );
          })}
        </div>
      </div>
      <div className="middle-generate-ai">
        <img src={mountains} alt="mountains" />
      </div>
      <div className="right-generate-ai">
        <div className="additional-settings">
          <div className="top-textarea">
            <textarea placeholder="Describe what you want to hear"></textarea>
            <img src={light} alt="light" className="light-icon" />
          </div>
          <div className="bottom-textarea">
            <p>Additional Setting</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <AspectRatio />
        <ModelsAndStyles />
        <button className="generate-button">Generate</button>
      </div>
    </div>
  );
};

export default GenerateAi;
