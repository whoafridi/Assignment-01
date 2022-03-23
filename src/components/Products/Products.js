import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();

  const data = products.slice(0, 6);

  return (
    <>
      <h2 className="product-header">Our products</h2>

      <section className="artcle">
        <div className="container">
          {products.length === 0 ? (
            <>
              <h2 className="loading">loading from api .... .</h2>
            </>
          ) : (
            <>
              {data.map((service) => (
                <Product key={service._id} service={service}></Product>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
