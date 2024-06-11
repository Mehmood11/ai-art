import React, { useState, useEffect } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://cognise.art/api/mobile/assessment?page=${page}&hit_point=mobile`
      );
      const newData = await response.json();
      const newlyData = newData.data;
      console.log(newlyData, newData);
      setData((prevData) => [...prevData, ...newData?.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      {data.map((item, index) => (
        <div className="inner-art-list" key={index}>
          <img
            src={`https://cognise.art/${item?.images[0]?.image}`}
            alt={item.generation_info?.prompt}
          />
          <p>{item.generation_info?.prompt}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default InfiniteScroll;
