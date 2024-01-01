import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch(`https://the-news-dragon-server-neon-six.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .then((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-center bg-gray-600 text-amber-500 text-2xl">
        All Categories
      </h1>
      {categories.map((category) => (
        <p key={category.id} className="text-center py-2 text-xl">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
