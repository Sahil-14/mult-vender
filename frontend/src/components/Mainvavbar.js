import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import SearchBox from "../screens/SearchBox";
import logo from "../logo.svg";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { CART_EMPTY } from "../constants/cartConstants";

const Mainvavbar = ({ history, location, match }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignIn;
  const currentLocation = location.pathname;
  const adminPaths = [
    "/dashboard",
    "/productlist",
    "/orderlist",
    "/userlist",
    "/support",
  ];
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    dispatch({ type: CART_EMPTY });
  };
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  return (
    <>
      {!adminPaths.includes(currentLocation) && (
        <header className="section-header">
          <section className="header-main border-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                  <a href="#" className="brand-wrap mb-0">
                    <img className="logo" src={logo} />
                  </a>
                </div>
                <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <Route
                    render={({ history }) => (
                      <SearchBox history={history}></SearchBox>
                    )}
                  ></Route>
                </div>
                <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                  <div className="d-flex justify-content-end">
                    {currentLocation !== "/" && (
                      <Link to="/" className="widget-header mr-3">
                        <div className="icon">
                          <i className="icon-sm rounded-circle border fa fa-home" />
                        </div>
                      </Link>
                    )}
                    <Link to="/cart" className="widget-header mr-3">
                      <div className="icon">
                        <i className="icon-sm rounded-circle border fa fa-shopping-cart" />
                        <span className="notify">
                          {cartItems.length > 0 ? cartItems.length : 0}
                        </span>
                      </div>
                    </Link>

                    {userInfo ? (
                      <div className="widget-header dropdown">
                        <Link
                          to="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                          data-offset="20,10"
                          aria-expanded="false"
                        >
                          <div className="icon icon-sm rounded-circle border ">
                            <i className="fa fa-user" />
                          </div>
                        </Link>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          x-placement="top-end"
                          style={{
                            position: "absolute",
                            willChange: "transform",
                            top: 0,
                            left: 0,
                            transform: "translate3d(65px, 5px, 0px)",
                          }}
                        >
                          <Link className="dropdown-item" to="/profile">
                            User Profile
                          </Link>
                          <Link className="dropdown-item" to="/orderhistory">
                            Order History
                          </Link>
                          <hr className="dropdown-divider" />
                          <Link
                            className="dropdown-item"
                            to="#signout"
                            onClick={signoutHandler}
                          >
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div class="text ml-2">
                        <span class="text-muted">Welcome!</span>
                        <div>
                          <Link to="/signin">Sign in</Link> |
                          <Link to="/register"> Register</Link>
                        </div>
                      </div>
                    )}

                    {/* widget-header .// */}
                  </div>{" "}
                  {/* widgets-wrap.// */}
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </div>{" "}
            {/* container.// */}
          </section>{" "}
          {/* header-main .// */}
          <nav className="navbar navbar-expand-md navbar-main border-bottom">
            <div className="container">
              <form className="d-md-none my-2">
                <div className="input-group">
                  <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search"
                    required
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">
                      {" "}
                      <i className="fas fa-search" />{" "}
                    </button>
                  </div>
                </div>
              </form>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#dropdown6"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="dropdown6">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      All categories
                    </a>
                    {loadingCategories ? (
                      <LoadingBox></LoadingBox>
                    ) : errorCategories ? (
                      <MessageBox variant="danger">
                        {errorCategories}
                      </MessageBox>
                    ) : (
                      <div className="dropdown-menu">
                        {categories.map((c) => (
                          <Link
                            key={c}
                            className="dropdown-item"
                            to={`/search/category/${c}`}
                          >
                            {c}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>

                  {loadingCategories ? (
                    <LoadingBox></LoadingBox>
                  ) : errorCategories ? (
                    <MessageBox variant="danger">{errorCategories}</MessageBox>
                  ) : (
                    categories.map(
                      (c, i) =>
                        i <= 4 && (
                          <li className="nav-item" key={c}>
                            {" "}
                            <Link
                              className="nav-link"
                              to={`/search/category/${c}`}
                            >
                              {c}
                            </Link>
                          </li>
                        )
                    )
                  )}
                </ul>
                <ul class="navbar-nav">
                  
                  {userInfo && userInfo.isAdmin && (
                   <li >
                      <Link to="/dashboard" class="btn btn-primary">
                        Admin Dashboard
                      </Link>
                      </li>
                  )}
                  
                </ul>
              </div>{" "}
              {/* collapse .// */}
            </div>{" "}
            {/* container .// */}
          </nav>
        </header>
      )}
    </>
  );
};

export default withRouter(Mainvavbar);
