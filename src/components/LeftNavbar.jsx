import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setNewsCategories(data.data.news_category));
  }, []);

  // console.log(newsCategories);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">
        All Category ({newsCategories.length})
      </h1>

      <div className="flex flex-col gap-4">
        {newsCategories.map((categoryItem) => (
          <NavLink
            to={`/categoryType/${categoryItem.category_id}`}
            key={categoryItem.category_id}
            className="btn"
          >
            {categoryItem.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
