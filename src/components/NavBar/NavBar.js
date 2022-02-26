import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
  return (
    <nav>
      <div className="nav_box">
      <div>
      <span><Link className="nav" to='/'>Home</Link></span>
      <span><Link className="nav" to='/'>Products</Link></span>
      <span><Link className="nav" to='/category'>Category</Link></span>
      <span><Link className="nav" to='/'>About</Link></span>

      </div>
        <span className="nav_color">
          <i className="fas fa-cart-plus nav-btn">
              <span>{cart.length}</span>
          </i>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
