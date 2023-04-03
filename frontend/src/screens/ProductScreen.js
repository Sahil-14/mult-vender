import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createReview, detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_CREATE_SUCCESS } from "../constants/productConstants";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const productId = props.match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;
  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Review submitted successfully.");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_SUCCESS });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Please enter comment and rating");
    }
  };
  return (

    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <>
          <section className="section-content">
            <div className="container">
              {/* <Link to="/">Back to result</Link> */}
              <header className="section-heading">
                <h3 className="section-title">Product Detailes</h3>
              </header>
              <div className="card">
                <div className="row no-gutters">
                  <aside className="col-md-6">
                    <article className="gallery-wrap">
                      <div className="img-big-wrap">
                        <div>
                          {" "}
                          <Link to="#">
                            <img src={product.image} alt={product.name} />
                          </Link>
                        </div>
                      </div>{" "}
                      {/* slider-product.// */}
                      <div className="thumbs-wrap">
                        <a href="#" className="item-thumb">
                          {" "}
                          <img src={product.image} />
                        </a>
                        <a href="#" className="item-thumb">
                          {" "}
                          <img src={product.image} />
                        </a>
                        <a href="#" className="item-thumb">
                          {" "}
                          <img src={product.image} />
                        </a>
                      </div>{" "}
                      {/* slider-nav.// */}
                    </article>{" "}
                    {/* gallery-wrap .end// */}
                  </aside>
                  <main className="col-md-6 border-left">
                    <article className="content-body">
                      <h2 className="title">{product.name}</h2>
                      <div className="rating-wrap my-3">
                        <ul className="rating-stars stars-active">
                          <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                          ></Rating>
                        </ul>
                        <small className="label-rating text-muted">
                          {product.numReviews} Reviews
                        </small>

                        {product.countInStock > 0 ? (
                          <strong className="label-rating text-success">
                            {" "}
                            <i className="fa fa-clipboard-check" /> In stock{" "}
                          </strong>
                        ) : (
                          <strong className="label-rating text-danger">
                            {" "}
                            <i className="fa fa-clipboard-check" /> Currently
                            not available{" "}
                          </strong>
                        )}
                      </div>{" "}
                      {/* rating-wrap.// */}
                      <div className="mb-3">
                        <var className="price h4">${product.price}</var>
                      </div>{" "}
                      {/* price-detail-wrap .// */}
                      <p>{product.description}</p>
                      <dl className="row">
                        <dt className="col-sm-3">Model#</dt>
                        <dd className="col-sm-9">Odsy-1000</dd>
                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">Brown</dd>
                        <dt className="col-sm-3">Delivery</dt>
                        <dd className="col-sm-9">Russia, USA, and Europe </dd>
                      </dl>
                      <hr />
                      <div className="form-row">
                        <div className="form-group col-md flex-grow-0">
                          <label>Quantity</label>
                          {"   "}
                          <div className="input-group mb-2 input-spinner mt-1">
                            {product.countInStock > 0 ? (
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                                className="form-control"
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            ) : (
                              <select class="form-control" disabled>
                                <option>0</option>
                              </select>
                            )}
                          </div>
                        </div>{" "}
                        {/* col.// */}
                        <div className="form-group col-md">
                          <label>Select size</label>
                          <div className="mt-1">
                            <label className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                name="select_size"
                                defaultChecked
                                className="custom-control-input"
                              />
                              <div className="custom-control-label">Small</div>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                name="select_size"
                                className="custom-control-input"
                              />
                              <div className="custom-control-label">Medium</div>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                name="select_size"
                                className="custom-control-input"
                              />
                              <div className="custom-control-label">Large</div>
                            </label>
                          </div>
                        </div>{" "}
                        {/* col.// */}
                      </div>{" "}
                      {product.countInStock > 0 ? (
                        <span className="btn  btn-outline-success">
                          {" "}
                          <button className="btn" onClick={addToCartHandler}>
                            Add to cart
                          </button>{" "}
                          <i className="fa fa-shopping-cart" />
                        </span>
                      ) : (
                        <span className="btn  btn-outline-light" disabled>
                          {" "}
                          <button className="btn text-light">
                            Add to cart
                          </button>{" "}
                          <i className="fa fa-shopping-cart" />
                        </span>
                      )}
                    </article>{" "}
                    {/* product-info-aside .// */}
                  </main>{" "}
                  {/* col.// */}
                </div>{" "}
                {/* row.// */}
              </div>{" "}
              {/* card.// */}
            </div>
          </section>
          <section className="section-content m-5">
            <div className="container">
              <header className="section-heading">
                <h3 className="section-title">Customer reviews & rating</h3>
              </header>

              {userInfo ? (
                <div className="row">
                  <div className="col-6">
                    {product.reviews.length === 0 && (
                      <MessageBox>There is no review</MessageBox>
                    )}
                    {product.reviews.map((review) => (
                      <article className="box mb-3" key={review._id}>
                        <div className="icontext w-100">
                          <img
                            src="https://picsum.photos/200"
                            className="img-xs icon rounded-circle"
                          />
                          <div className="text">
                            <span className="date text-muted float-md-right">
                              {review.createdAt.substring(0, 10)}{" "}
                            </span>
                            <h6 className="mb-1">{review.name} </h6>
                            <ul className="rating-stars">
                              <Rating
                                rating={review.rating}
                                caption=" "
                              ></Rating>
                            </ul>
                          </div>
                        </div>{" "}
                        {/* icontext.// */}
                        <div className="mt-3">
                          <p>{review.comment}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="col-6 ">
                    <div className="card ">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Review</h4>
                        <form onSubmit={submitHandler}>
                          <div className="form-group">
                            <label htmlFor="rating">Rate this item !</label>
                            <select
                              className="form-control"
                              id="rating"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1- Poor</option>
                              <option value="2">2- Fair</option>
                              <option value="3">3- Good</option>
                              <option value="4">4- Very good</option>
                              <option value="5">5- Excelent</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="comment">
                              Write a comment about product.
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              id="comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </div>
                          <div className="form-group"></div>
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Send
                          </button>
                          <div>
                            {loadingReviewCreate && <LoadingBox></LoadingBox>}
                            {errorReviewCreate && (
                              <MessageBox variant="danger">
                                {errorReviewCreate}
                              </MessageBox>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  
                </div>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}


// Note : seller info remaining