import { useState } from "react";
import "./App.css";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Category";
import ArtList from "./components/ArtList";
import InfiniteScroll from "./test";

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

  return (
    <div className="main-app">
      <Headers />
      <HeroSection />
      <h1 className="main-category-text">{activeCategory}</h1>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ArtList activeCategory={activeCategory} />
      {/* <InfiniteScroll /> */}
    </div>
  );
}

export default App;
