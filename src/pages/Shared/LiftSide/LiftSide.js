import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/image.png.png";
import img2 from "../../../assets/image.2.png";
import img3 from "../../../assets/image.3.png";
import { FaCartShopping } from "react-icons/fa6";
const LiftSide = () => {
  const [categories, Setcategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categorys")
      .then((res) => res.json())
      .then((data) => Setcategories(data));
  }, []);

  return (
    <div>
      <h2>All categories:{categories.length}</h2>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
      <div className="d-flex flex-column">
        <img src={img1} alt="img1" className="mb-4" />
        <img src={img2} alt="img2" className="mb-4" />
        <img src={img3} alt="img3" className="mb-4" />
      </div>
    </div>
  );
};

export default LiftSide;
