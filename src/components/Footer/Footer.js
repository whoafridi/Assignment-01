import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="row">
        <div className="col">
          <h3 className="title">Commerce</h3>
          <p className="title">12/2, Dhanmondi 3-A, Dhaka-1209</p>
          <p className="title">info@r.com</p>
          <p className="title">Hotline: 0980987665</p>
        </div>
        <div className="col">
          <h3 className="title">Home</h3>
          <p className="title">About us</p>
          <p className="title">Contact</p>
          <p className="title">Product</p>
        </div>
        <div className="col">
          <h3 className="title">Follow us on social</h3>
          <div className="icons">
            <h3>
              <i className="fab fa-facebook"></i>
            </h3>
            <h3>
              <i className="fab fa-twitter"></i>
            </h3>
            <h3>
              <i className="fab fa-linkedin"></i>
            </h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
