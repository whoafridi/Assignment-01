import React from "react";
import "./Product.css";
import { Link } from 'react-router-dom';

const Product = ({service, handleAddToCart}) => {
  const {_id, img, name, price} = service
  return (
    <>
          <article>
          <Link className="link-text" to={`/detail/${_id}`}>
          <img className="product-img" src={img} alt={name} />
            <h3>{name}</h3> 
            </Link>   
            <p>Price : {price}</p>
            <button
              onClick={() => handleAddToCart(service)} className="btn">
                <i class="fas fa-cart-arrow-down"> Add to cart</i>
            </button>
          </article >
    </>
  );
};

export default Product;
