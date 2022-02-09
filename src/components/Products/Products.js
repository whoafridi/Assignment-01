import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://arcane-spire-40682.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const data = products.slice(0, 6);
  const data2 = products.slice(6, 12);

  return (
    <>
      <h2 className="product-header">Our products</h2>

      <section className="artcle">
        <div className="container">
          {products.length == 0 ? (
            <>
              <h2 className="loading">loading from api .... .</h2>
            </>
          ) : (
            <>
              {data.map((service) => (
                <Product
                  key={service.id}
                  service={service}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
            </>
          )}
        </div>
      </section>

      <div className="next-prev">
        <button>
          <a target="_blank" href="#">
            <i class="fas fa-arrow-left"></i>
          </a>
        </button>
        <button>
          <a target="_blank" href="#">
            <i class="fas fa-arrow-right"></i>
          </a>
        </button>
      </div>
    </>
  );
};

export default Products;
