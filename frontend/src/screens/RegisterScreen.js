import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import CheckoutSteps from "../components/CheckoutSteps";
export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not matching");
    } else {
      dispatch(register(name, email, password));
    }
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

        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Register</h4>
            <form onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox varient="danger">{error}</MessageBox>}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user" />{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
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
                    placeholder="Email-Id"
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
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
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
                    id="confirmPassword"
                    placeholder="Confirm password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                  />
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                Already have an account?{" "}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </div>{" "}
              {/* form-group form-check .// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Register
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>
          </div>{" "}
          {/* card-body.// */}
        </div>
        </div>
      </section>
    </div>
  );
}
