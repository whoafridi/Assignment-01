import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Product = ({ service }) => {
  const { _id, img, name, price } = service;
  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      <article>
        <Link className="link-text" to={`/detail/${_id}`}>
          <img className="product-img" src={img} alt={name} />
          <h3>{name}</h3>
        </Link>
        <p>Price : {price}</p>
        <button onClick={() => handleAddToCart(service)} className="btn">
          <i className="fas fa-cart-arrow-down"> Add to cart</i>
        </button>
      </article>
    </>
  );
};

export default Product;
