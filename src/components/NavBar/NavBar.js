import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="sticky">
      <div className="nav_box">
        <div style={{margin:"10px", cursor:"pointer"}}>
          <span>
            <Link className="nav" to="/">
              Home
            </Link>
          </span>
          <span>
            <Link className="nav" to="/category">
              Category
            </Link>
          </span>
        </div>
        <span className="nav_color">
          <i className="fas fa-cart-plus nav-btn">
            <span className="content">{cart.length}</span>
          </i>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
