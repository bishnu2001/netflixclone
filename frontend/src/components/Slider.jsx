import React from "react";
import Cardslider from "./Cardslider";

const Slider = ({ movies }) => {
  // Group movies into categories
  const categories = [
    { title: "Trending Now", range: [0, 10] },
    { title: "New Releases", range: [10, 20] },
    { title: "Blockbuster Movies", range: [20, 30] },
    { title: "Popular on Netflix", range: [30, 40] },
    { title: "Action movies", range: [40, 50] },
    { title: "Epics", range: [50, 60] },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <Cardslider
          key={index}
          title={category.title}
          data={movies.slice(...category.range)}
        />
      ))}
    </div>
  );
};

export default Slider;
