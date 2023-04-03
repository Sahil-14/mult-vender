import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import CheckoutSteps from "../components/CheckoutSteps";
export default function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignIn;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>
      <section className="section-content padding-y">
        <div className="card mx-auto shadow" style={{ maxWidth: 400, marginTop: 40 }}>
          {" "}
          <div className="card-body">
            <h4 className="card-title mb-4 text-center">Sign In</h4>
            <form onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox varient="danger">{error}</MessageBox>}
              <button className="btn btn-facebook btn-block mb-2" disabled>
                {" "}
                <i className="fa fa-facebook-f" /> &nbsp; Sign in with Facebook
              </button>
              <button className="btn btn-google btn-block mb-4" disabled>
                {" "}
                <i className="fa fa-google" /> &nbsp; Sign in with Google
              </button>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                    </span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-lock" />{" "}
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                New customer?{" "}
                <Link to={`/register?redirect=${redirect}`}>
                  Create your account
                </Link>
              </div>{" "}
              {/* form-group form-check .// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Sign-In
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </section>
    </div>
  );
}
