import React, { useEffect } from "react";
import Product from "../components/Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import OwlProducts from "../components/Owl";
import banner from "../images/banners/1.jpg";
import image from "../images/items/2.jpg";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSeller);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;
  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, []);
  return (
    <div>
      <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="intro-banner-wrap">
            <img src={banner} className="img-fluid rounded" />
          </div>
        </div>{" "}
      </section>

      {/* <h2>Top Sellers</h2> */}
      {/* {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}*/}
      <section className="section-content padding-bottom-sm">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">Featured Products</h3>
          </header>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox varient="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row ">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="section-content padding-bottom-sm">
        <div className="container">
        <header className="section-heading">
            <h3 className="section-title">Trending Products</h3>
          </header>
          <OwlProducts></OwlProducts>
        </div>
      </section>
      {/* Recommanded */}
      <section className="section-content padding-bottom-sm">
        <div className="container">
          <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Recommended</h3>
          </header>
          {/* sect-heading */}
          <div className="row">
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <Link to="#" className="img-wrap">
                  {" "}
                  <img src={image} />
                </Link>
                <figcaption className="info-wrap">
                  <Link to="#" className="title">
                    Just another product name
                  </Link>
                  <div className="price mt-1">$179.00</div>{" "}
                  {/* price-wrap.// */}
                </figcaption>
              </div>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <Link to="#" className="img-wrap">
                  {" "}
                  <img src={image} />
                </Link>
                <figcaption className="info-wrap">
                  <Link to="#" className="title">
                    Just another product name
                  </Link>
                  <div className="price mt-1">$179.00</div>{" "}
                  {/* price-wrap.// */}
                </figcaption>
              </div>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <Link to="#" className="img-wrap">
                  {" "}
                  <img src={image} />
                </Link>
                <figcaption className="info-wrap">
                  <Link to="#" className="title">
                    Just another product name
                  </Link>
                  <div className="price mt-1">$179.00</div>{" "}
                  {/* price-wrap.// */}
                </figcaption>
              </div>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <Link to="#" className="img-wrap">
                  {" "}
                  <img src={image} />
                </Link>
                <figcaption className="info-wrap">
                  <Link to="#" className="title">
                    Just another product name
                  </Link>
                  <div className="price mt-1">$179.00</div>{" "}
                  {/* price-wrap.// */}
                </figcaption>
              </div>
            </div>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
    </div>
  );
}
