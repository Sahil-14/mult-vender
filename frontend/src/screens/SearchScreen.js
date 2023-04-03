import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Rating from "../components/Rating";
import { prices, ratings } from "../utils";

export default function SearchScreen(props) {
  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [dispatch, name, category, min, max, rating, order, pageNumber]);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;

    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    // /rating/${filterRating}/order/${sortOrder}
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  return (
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <a
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Categories</h6>
                  </a>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_1"
                  style={{}}
                >
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-light" type="button">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    <>
                      {loadingCategories ? (
                        <LoadingBox></LoadingBox>
                      ) : errorCategories ? (
                        <MessageBox variant="danger">
                          {errorCategories}
                        </MessageBox>
                      ) : (
                        <ul className="list-menu">
                          <li>
                            <Link
                              className={"all" === category ? "active" : ""}
                              to={getFilterUrl({ category: "all" })}
                            >
                              Any
                            </Link>
                          </li>
                          {categories.map((c) => (
                            <li key={c}>
                              <Link
                                className={c === category ? "active" : ""}
                                to={getFilterUrl({ category: c })}
                              >
                                {c}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>
              {/* filter-group  .// */}
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                    aria-expanded="true"
                    className
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Price</h6>
                  </a>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_2"
                  style={{}}
                >
                  <div className="card-body">
                    <ul className="list-menu">
                      {prices.map((p) => (
                        <li key={p.name}>
                          <Link
                            to={getFilterUrl({ min: p.min, max: p.max })}
                            className={
                              `${p.min}-${p.max}` === `${min}-${max}`
                                ? "active"
                                : ""
                            }
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>
              {/* filter-group .// */}
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                    aria-expanded="true"
                    className
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Average Rating</h6>
                  </a>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_3"
                  style={{}}
                >
                  <div className="card-body">
                    <ul className="list-menu">
                      {ratings.map((r) => (
                        <li key={r.name}>
                          <Link
                            to={getFilterUrl({ rating: r.rating })}
                            className={
                              `${r.rating}` === `${rating}` ? "active" : ""
                            }
                          >
                            <Rating
                              caption={" & up"}
                              rating={r.rating}
                            ></Rating>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>
              {/* filter-group .// */}
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                    aria-expanded="true"
                    className
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Sizes</h6>
                  </a>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_4"
                  style={{}}
                >
                  <div className="card-body">
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> XS </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> SM </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> LG </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> XXL </span>
                    </label>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>
            </div>
            {/* card.// */}
          </aside>
          <main class="col-md-9">
            <header class="border-bottom mb-4 pb-3">
              <div class="form-inline">
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <span class="mr-md-auto">{products.length} Items found </span>
                )}{" "}
                <select
                  value={order}
                  onChange={(e) => {
                    props.history.push(getFilterUrl({ order: e.target.value }));
                  }}
                  className="mr-auto form-control"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="lowest">Price: Low to High</option>
                  <option value="highest">Price: High to Low</option>
                  <option value="toprated">Avg. Customer Reviews</option>
                </select>
              </div>
            </header>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {products.length === 0 && (
                  <MessageBox>No Product Found</MessageBox>
                )}
                {products.map((product) => (
                  <article className="card card-product-list">
                    <div className="row no-gutters">
                      <aside className="col-md-3">
                        <Link
                          to={`/product/${product._id}`}
                          className="img-wrap"
                        >
                          <img src={product.image} alt={product.name} />
                        </Link>
                      </aside>
                      {/* col.// */}
                      <div className="col-md-6">
                        <div className="info-main">
                          <Link
                            to={`/product/${product._id}`}
                            className="h5 title"
                          >
                            {product.name}
                          </Link>
                          <div className="rating-wrap mb-3">
                            <ul className="rating-stars">
                              <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                              ></Rating>
                            </ul>
                          </div>
                          {/* rating-wrap.// */}
                          <p>
                            {product.description}Take it as demo specs, ipsum
                            dolor sit amet, consectetuer adipiscing elit, Lorem
                            ipsum dolor sit amet, consectetuer adipiscing elit,
                            Ut wisi enim ad minim veniam{" "}
                          </p>
                        </div>
                        {/* info-main.// */}
                      </div>
                      {/* col.// */}
                      <aside className="col-sm-3">
                        <div className="info-aside">
                          <div className="price-wrap">
                            <span className="price h5"> ${product.price} </span>
                          </div>
                          {/* info-price-detail // */}
                          {product.countInStock > 0 ? (
                            <p className="text-success">
                              {" "}
                              <i className="fa fa-clipboard-check" /> In stock{" "}
                            </p>
                          ) : (
                            <p className="text-danger">
                              {" "}
                              <i className="fa fa-clipboard-check" /> Currently
                              not available{" "}
                            </p>
                          )}
                          <br />
                          <p>
                            <Link
                              to={`/product/${product._id}`}
                              className="btn btn-primary btn-block"
                            >
                              Details
                            </Link>
                          </p>
                        </div>
                        {/* info-aside.// */}
                      </aside>
                      {/* col.// */}
                    </div>
                    {/* row.// */}
                  </article>
                ))}
              </>
            )}

            <nav aria-label="Page navigation sample">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                {[...Array(pages).keys()].map((x) => (
                  <li
                    className={
                      x + 1 === page ? "page-item active" : "page-item"
                    }
                  >
                    <Link
                      className="page-link"
                      key={x + 1}
                      to={getFilterUrl({ page: x + 1 })}
                    >
                      {x + 1}
                    </Link>
                  </li>
                ))}

                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </section>
  );
}
