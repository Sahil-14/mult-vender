import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <main className="col-md-8">
              <article className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-4">Order Items</h4>
                  <div className="row">
                    {cart.cartItems.map((item) => (
                      <div className="col-md-6" key={item.product}>
                        <figure className="itemside  mb-4">
                          <div className="aside">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="border img-sm"
                            />
                          </div>
                          <figcaption className="info">
                            <p>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </p>
                            <span className="text-muted">
                              {" "}
                              {item.qty} x ${item.price} = $
                              {item.qty * item.price}{" "}
                            </span>
                          </figcaption>
                        </figure>
                      </div>
                    ))}
                  </div>{" "}
                  {/* row.// */}
                </div>{" "}
                {/* card-body.// */}
              </article>{" "}
              {/* card.// */}
              {/* card.// */}
              <article className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-4">Delivery info</h4>
                  {/* row.// */}
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <label>Fullname</label>
                      <input
                        type="text"
                        value={cart.shippingAddress.fullName}
                        className="form-control"
                        disabled
                      />
                    </div>

                    <div className="form-group col-sm-12">
                      <label>Address</label>
                      <input
                        type="text"
                        value={cart.shippingAddress.address}
                        className="form-control"
                        disabled
                      />
                    </div>

                    <div className="form-group col-sm-4">
                      <label>Country</label>
                      <input
                        type="text"
                        value={cart.shippingAddress.country}
                        className="form-control"
                        disabled
                      />
                    </div>
                    <div className="form-group col-sm-4">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cart.shippingAddress.city}
                        disabled
                      />
                    </div>
                    <div className="form-group col-sm-4">
                      <label>Pincode</label>
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        value={cart.shippingAddress.postalCode}
                      />
                    </div>
                  </div>{" "}
                  {/* row.// */}
                </div>

                {/* card-body.// */}
              </article>{" "}
              {/* card.// */}
              {/* accordion end.// */}
            </main>{" "}
            {/* col.// */}
            <aside className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h4 className="mb-3">Order Summary</h4>
                  <dl className="dlist-align">
                    <dt className="text-muted">Payment method:</dt>
                    <dd> {cart.paymentMethod}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt className="text-muted">Items:</dt>
                    <dd>${cart.itemsPrice.toFixed(2)}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt className="text-muted">Shipping:</dt>
                    <dd>${cart.shippingPrice.toFixed(2)}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt className="text-muted">Tax:</dt>
                    <dd>${cart.taxPrice.toFixed(2)}</dd>
                  </dl>
                  <hr />
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="h5">${cart.totalPrice.toFixed(2)}</dd>
                  </dl>
                  <hr />
                  <p className="small mb-3 text-muted">
                    By clicking you are agree with terms of condition{" "}
                  </p>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="btn btn-primary btn-block"
                    disabled={cart.cartItems.length === 0}
                  >
                    {" "}
                    Place Order
                  </button>
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card.// */}
            </aside>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      
    </div>
  );
}
