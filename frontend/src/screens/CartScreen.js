import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <section className="section-content padding-y-lg">
      <div className="container">


        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <div className="card">
            <div className="row no-gutters">
              <aside className="col-md-9">
                {cartItems.map((item) => (
                  <article
                    className="card-body border-bottom"
                    key={item.product}
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <figure className="itemside">
                          <div className="aside">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="border img-sm"
                            />
                          </div>
                          <figcaption className="info">
                            <Link
                              to={`/product/${item.product}`}
                              className="title"
                            >
                              {item.name}{" "}
                            </Link>
                            <strong className>${item.price}</strong>

                            <button
                              className="btn btn-link text-danger"
                              type="button"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              Delete
                            </button>
                          </figcaption>
                        </figure>
                      </div>{" "}
                      {/* col.// */}
                      <div className="form-group  col-md-5 text-md-right text-right ">
                        <label>Quantity :</label>
                        {"   "}
                        <div className="input-group input-spinner">
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                            className="form-control"
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>{" "}
                        {/* input-group.// */}
                      </div>
                    </div>{" "}
                    {/* row.// */}
                  </article>
                ))}

                {/* card-group.// */}
              </aside>{" "}
              {/* col.// */}
              <aside className="col-md-3 border-left">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>
                      Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                    </dt>
                    <dd className="text-right">
                      ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right text-danger"> - </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right text-dark b">
                      <strong>
                        ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                      </strong>
                    </dd>
                  </dl>
                  <hr />
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                    className="btn btn-primary btn-block"
                  >
                    {" "}
                    Checkout{" "}
                  </button>
                  <Link to="/" className="btn btn-light btn-block">
                    Continue Shopping
                  </Link>
                </div>{" "}
                {/* card-body.// */}
              </aside>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </div>
        )}
      </div>
    </section>
  );
}
