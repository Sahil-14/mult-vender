import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";

import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <>
      {userInfo ? (
        <div>
          <CheckoutSteps step1 step2 step3></CheckoutSteps>
          <section className="section-content padding-y">
            <div
              className="card mx-auto"
              style={{ maxWidth: 400, marginTop: 40 }}
            >
              <article className="accordion" id="accordion_pay">
                <form className="form" onSubmit={submitHandler}>
                  <div className="card">
                    <header className="card-header">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="paypal"
                          value="PayPal"
                          name="paymentMethod"
                          required
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <h6 className="form-check-label">Paypal</h6>
                      </div>
                    </header>
                  </div>{" "}
                  {/* card.// */}
                  <div className="card">
                    <header className="card-header">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="card"
                          value="card"
                          name="paymentMethod"
                          required
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <h6 className="form-check-label"> Credit Card</h6>
                      </div>
                    </header>
                  </div>{" "}
                  {/* card.// */}
                  <div className="card">
                    <header className="card-header">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cod"
                          value="cod"
                          name="paymentMethod"
                          required
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          disabled
                        />
                        <h6 className="form-check-label"> COD </h6>
                      </div>
                    </header>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">
                    Continue
                  </button>
                </form>
              </article>
            </div>
          </section>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
