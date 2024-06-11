import React from "react";
import "./category.css";
const Categories = ({ categories, setActiveCategory, activeCategory }) => (
  <div className="categories">
    {categories.map((category) => (
      <button
        key={category}
        className={activeCategory === category ? "active" : ""}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default Categories;
