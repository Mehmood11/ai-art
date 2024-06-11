import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Headers = () => {
  const [showPhotoEditingTools, setShowPhotoEditingTools] = useState(false);
  const [showAiTools, setShowAiTools] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const togglePhotoEditingTools = () => {
    setShowPhotoEditingTools(!showPhotoEditingTools);
    setShowAiTools(false);
  };

  const toggleAiTools = () => {
    setShowAiTools(!showAiTools);
    setShowPhotoEditingTools(false);
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header>
      <h1>Art Generator</h1>
      <nav>
        <ul className="nav-list">
          <li onClick={togglePhotoEditingTools}>
            Photo Editing Tools <FontAwesomeIcon icon={faChevronDown} />
            {showPhotoEditingTools && (
              <ul className="dropdown">
                <li>Tool 1</li>
                <li>Tool 2</li>
                <li>Tool 3</li>
              </ul>
            )}
          </li>
          <li onClick={toggleAiTools}>
            Ai Tools <FontAwesomeIcon icon={faChevronDown} />
            {showAiTools && (
              <ul className="dropdown">
                <li>Tool A</li>
                <li>Tool B</li>
                <li>Tool C</li>
              </ul>
            )}
          </li>
          <li>Supports</li>
        </ul>

        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-icon"
          onClick={toggleDrawer}
        />
        <div className={`drawer ${showDrawer ? "show" : ""}`}>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={toggleDrawer}
          />
          <ul className="mobile-list">
            <li onClick={togglePhotoEditingTools}>
              Photo Editing Tools <FontAwesomeIcon icon={faChevronDown} />
              {showPhotoEditingTools && (
                <ul className="dropdown">
                  <li>Tool 1</li>
                  <li>Tool 2</li>
                  <li>Tool 3</li>
                </ul>
              )}
            </li>
            <li onClick={toggleAiTools}>
              Ai Tools <FontAwesomeIcon icon={faChevronDown} />
              {showAiTools && (
                <ul className="dropdown">
                  <li>Tool A</li>
                  <li>Tool B</li>
                  <li>Tool C</li>
                </ul>
              )}
            </li>
            <li>Supports</li>
          </ul>
        </div>
      </nav>
      <button>Sign In</button>
    </header>
  );
};

export default Headers;
