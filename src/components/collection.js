import React from "react";
import { Link } from "react-router-dom";
import "./css/collection.css";

const Collection = ({ gender, image, title, description, price, id }) => {
  return (
    <div className="product">
      <Link to={`/${gender}/${id}`}>
        <div className="item">
          <img src={image} />
          <p>New Season</p>
          <h5>{title}</h5>
          <h6>{description}</h6>
          <h4>HK${price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Collection;
