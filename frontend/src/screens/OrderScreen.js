import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder, payOrder, deliverOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PayPalButton } from "react-paypal-button-v2";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get(`${process.env.SERVER_URL}/api/config/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <section className="section-content padding-y bg">
      <div className="container">
        <div className="row">
          <main className="col-md-8">
            <article className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Order Id :{order._id}</h4>
              </div>
            </article>
            <article className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Order Items</h4>
                <div className="row">
                  {order.orderItems.map((item) => (
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
            <article className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Payment Info</h4>
                <div className="row">
                  <div className="text col-md-6">
                    <strong>Method:</strong>  <span className="ml-3 text-muted">{order.paymentMethod}</span>
                  </div>
                  <div className="col-md-6 block">
                  {order.isPaid ? (
                    <MessageBox variant="success">
                      Paid at {order.paidAt}
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Not Paid</MessageBox>
                  )}
                  </div>
                </div>
               
              </div>
            </article>
            <article className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Delivery info</h4>
                {/* row.// */}
                <div className="row">
                  <div className="form-group col-sm-12">
                    <label>Fullname</label>
                    <input
                      type="text"
                      value={order.shippingAddress.fullName}
                      className="form-control"
                      disabled
                    />
                  </div>

                  <div className="form-group col-sm-12">
                    <label>Address</label>
                    <input
                      type="text"
                      value={order.shippingAddress.address}
                      className="form-control"
                      disabled
                    />
                  </div>

                  <div className="form-group col-sm-4">
                    <label>Country</label>
                    <input
                      type="text"
                      value={order.shippingAddress.country}
                      className="form-control"
                      disabled
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      value={order.shippingAddress.city}
                      disabled
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Pincode</label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={order.shippingAddress.postalCode}
                    />
                  </div>
                  <div className="col-md-12 block">
                  {order.isDelivered ? (
                    <MessageBox variant="success">
                      Delivered at {order.deliveredAt}
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Not Delivered</MessageBox>
                  )}
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
                  <dt className="text-muted">Items:</dt>
                  <dd>${order.itemsPrice.toFixed(2)}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt className="text-muted">Shipping:</dt>
                  <dd>${order.shippingPrice.toFixed(2)}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt className="text-muted">Tax:</dt>
                  <dd>${order.taxPrice.toFixed(2)}</dd>
                </dl>
                <hr />
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="h5">${order.totalPrice.toFixed(2)}</dd>
                </dl>
                <hr />

                {!order.isPaid && (
                  <li>
                    {!sdkReady ? (
                      <LoadingBox></LoadingBox>
                    ) : (
                      <>
                        {errorPay && (
                          <MessageBox variant="danger">{errorPay}</MessageBox>
                        )}
                        {loadingPay && <LoadingBox></LoadingBox>}

                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPaymentHandler}
                        ></PayPalButton>
                      </>
                    )}
                  </li>
                )}
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <LoadingBox></LoadingBox>}
                    {errorDeliver && (
                      <MessageBox variant="danger">{errorDeliver}</MessageBox>
                    )}
                    <button
                      type="button"
                      className="primary block"
                      onClick={deliverHandler}
                    >
                      Deliver Order
                    </button>
                  </li>
                )}
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
  );
}
