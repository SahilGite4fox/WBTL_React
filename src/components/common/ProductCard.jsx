import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title }) => {
  return (
    <div className="productContSlide">
      <div className="productContSlideImg">
        <img src={image} alt={title} />
        <Link to={`/product/${id}`} className="absolute">View</Link>
      </div>
      <div className="productslideTitle">
        <h6>{title}</h6>
      </div>
    </div>
  );
};


export default ProductCard;