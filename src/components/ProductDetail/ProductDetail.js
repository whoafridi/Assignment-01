import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./ProductDetail.css";

const ProductDetail = ({ s }) => {
  const { img, description, name, price } = s;
  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      <div className="hero">
        <div className="details-row">
          <div className="preview">
            <img className="preview-img" src={img} alt={name} />
          </div>
          <div className="details-col">
            <div className="content">
              <h2>{name}</h2>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <p className="price">{price}</p>
              <button
                className="details-cart"
                type="button"
                onClick={() => handleAddToCart(s)}
              >
                <i className="fa fa-shopping-cart"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="description-text">{description}</div>
    </>
  );
};

export default ProductDetail;
