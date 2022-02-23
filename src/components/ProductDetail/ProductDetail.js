import "./ProductDetail.css";

const ProductDetail = ({ s }) => {
  const { img, description, name, price } = s;
  return (
    <>
      <div class="hero">
        <div class="details-row">
          {/* <div class="details-col"> */}
            {/* <div class="slider"> */}
              <div class="preview">
                <img class="preview-img" src={img} alt="" />
              {/* </div> */}
            {/* </div> */}
          </div>
          <div class="details-col">
            <div class="content">
              <h2>{name}</h2>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
              </div>
              <p class="price">{price}</p>
              <button className="details-cart" type="button">
                <i class="fa fa-shopping-cart"></i>
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
