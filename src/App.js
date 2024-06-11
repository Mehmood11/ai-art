import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Category";
import ArtList from "./components/ArtList";
import { useEffect, useState } from "react";
import GenerateAi from "./components/GenerateAi";

const categories = [
  "mobile",
  "Realistic",
  "Science Fiction",
  "Cartoon",
  "Anime",
  "Oil Painting",
  "Landscape",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("mobile");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Router>
      <div className="main-app">
        <Headers />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <h1 className="main-category-text">{activeCategory}</h1>
                <Categories
                  categories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <ArtList activeCategory={activeCategory} />
              </>
            }
          />
          <Route path="/generate-ai" element={<GenerateAi />} />
        </Routes>
        <div className="scroll-up-button">
          {isVisible && (
            <button onClick={scrollToTop} className="scroll-button">
              <img
                src="https://cognise.art/static/images/back_to_top.svg"
                alt="scroll-button"
              />
            </button>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
