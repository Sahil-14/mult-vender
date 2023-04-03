import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="container">
    <div className="tracking-wrap">
    <div className={props.step1 ? 'step active' : 'step'}>
      <span className="icon"> <i className="fa fa-user" /> </span>
      <span className="text">Sign-In</span>
    </div> {/* step.// */}
    <div className={props.step2 ? 'step active' : 'step'}>
      <span className="icon"> <i className="fa fa-home" /> </span>
      <span className="text"> Shipping address</span>
    </div> {/* step.// */}
    <div className={props.step3 ? 'step active' : 'step'}>
      <span className="icon"> <i className="fa fa-money" /> </span>
      <span className="text"> Payment </span>
    </div> {/* step.// */}
    <div className={props.step4 ? 'step active' : 'step'}>
      <span className="icon"> <i className="fa fa-gift" /> </span>
      <span className="text">Ready Place Order</span>
    </div> {/* step.// */}
  </div>
  </div>
  );
}

