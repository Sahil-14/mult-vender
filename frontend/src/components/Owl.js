import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image from "../images/items/1.jpg";

const OwlProducts = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: ["Prev", "Next"],
        loopMargin:10,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
  return (
    <OwlCarousel 
    className="slider-items-owl owl-theme "  {...options} nav>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <span className="badge badge-success"> New </span>
            <img src={image} />
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title text-truncate">
              <a href="#">First item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
          <span className="badge badge-danger"> 50% off </span>

            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Second item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
          <span className="badge badge-light"> Offer </span>
            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Third item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            {" "}
            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Good item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
          <span className="badge badge-light"> Trending </span>
            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Another item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            {" "}
            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Third item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
      <div className="item-slide">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            {" "}
            <img src={image} />{" "}
          </div>
          <figcaption className="info-wrap text-center">
            <h6 className="title">
              <a href="#">Good item name</a>
            </h6>
          </figcaption>
        </figure>{" "}
        {/* card // */}
      </div>
    </OwlCarousel>
  );
};

export default OwlProducts;
