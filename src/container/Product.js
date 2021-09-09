import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList =  products.map((product) => {
    const { id, category, title, image, price } = product;
    return (
      <div className="col-lg-4 col-md-4 col-12" key={id}>
      <Link to={`/product/${id}`} style={{textDecoration : 'none'}}>
        <div className="card mx-3 my-3">
          <img
            src={image}
            className="card-img-top"
            alt="image"
            style={{
              height: "22rem",
              width: "80%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-text">Price: ${price}</h6>
            <p className="card-text">{category}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Product;
