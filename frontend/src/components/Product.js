import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import image from '../images/items/1.jpg'
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="col-md-3 col-sm-6" >
    <figure className="card card-product-grid">
      <Link to={`/product/${product._id}`} className="img-wrap">
        <img src={product.image} alt={product.name}/>
      </Link>
      <figcaption className="info-wrap">
        <Link to={`/product/${product._id}`} className="title">
        {product.name}
        </Link>
        <div className="mt-2">
          <var className="price">${product.price}</var>
          <ul className=" float-right">
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </ul>
        </div>
      </figcaption>
    </figure>{" "}
    {/* card // */}
  </div>
  );
}


{/* <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div> */}