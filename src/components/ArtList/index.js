import React, { useCallback, useEffect, useRef, useState } from "react";
import "./artlist.css";
import axios from "axios";

const ArtList = ({ activeCategory }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const lastAIArt = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    fetchData();
  }, [page, activeCategory]); // Fetch data whenever the page or category changes

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(`https://cognise.art/api/mobile/assessment`, {
        params: {
          pagination: 10,
          hit_point: activeCategory,
          page: page,
        },
      })
      .then((response) => {
        setItems((oldArt) => {
          return [...oldArt, ...response?.data?.data];
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setItems([]);
  }, [activeCategory]);

  return (
    <div className="main-art-container">
      <div className="art-list">
        {!items.length && !isLoading && (
          <h1 className="no-art-text">No Arts</h1>
        )}
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return (
              <div className="inner-art-list" key={index} ref={lastAIArt}>
                <img
                  src={`https://cognise.art/${item?.images[0]?.image}`}
                  alt={item.generation_info?.prompt}
                />
                <p>{item.generation_info?.prompt}</p>
              </div>
            );
          } else {
            return (
              <div className="inner-art-list" key={index}>
                <img
                  src={`https://cognise.art/${item?.images[0]?.image}`}
                  alt={item.generation_info?.prompt}
                />
                <p>{item.generation_info?.prompt}</p>
              </div>
            );
          }
        })}
        {isLoading && (
          <div className="main-art-container-loader">
            <div className="art-list-loading">
              <div className="inner-art-list"></div>
              <div className="inner-art-list"></div>
              <div className="inner-art-list"></div>
              <div className="inner-art-list"></div>
              <div className="inner-art-list"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtList;
