import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };
  return (
    <section className="section-content padding-y">
      <div
        className="card mx-auto shadow"
        style={{ maxWidth: 500, marginTop: 40 }}
      >
        <div className="card ">
          <div className="card-body">
            <h4 className="card-title mb-4">User Profile</h4>
            <form onSubmit={submitHandler}>
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  {loadingUpdate && <LoadingBox></LoadingBox>}
                  {errorUpdate && (
                    <MessageBox variant="danger">{errorUpdate}</MessageBox>
                  )}
                  {successUpdate && (
                    <MessageBox variant="success">
                      Profile Updated Successfully
                    </MessageBox>
                  )}
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          {" "}
                          <i className="fa fa-user" />{" "}
                        </span>
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
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
                        id="email"
                        type="email"
                        placeholder="Email-Id"
                        value={email}
                        onChange={(e) => setName(e.target.value)}
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
                        id="password"
                        type="password"
                        placeholder="Password"
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
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control"
                      />
                    </div>{" "}
                    {/* input-group.// */}
                  </div>{" "}
                  {/* form-group// */}
                  {user.isSeller && (
                    <>
                      <h4 className="card-title mb-4">Seller Profile</h4>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-user" />{" "}
                            </span>
                          </div>
                          <input
                            id="sellerName"
                            type="text"
                            placeholder="Enter Seller Name"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-logo" />
                            </span>
                          </div>
                          <input
                            id="sellerLogo"
                            type="text"
                            placeholder="Enter Seller Logo"
                            value={sellerLogo}
                            onChange={(e) => setSellerLogo(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-logo" />
                            </span>
                          </div>
                          <input
                            id="sellerDescription"
                            type="text"
                            placeholder="Enter Seller Description"
                            value={sellerDescription}
                            onChange={(e) =>
                              setSellerDescription(e.target.value)
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {/* form-group form-check .// */}
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      {" "}
                      Update
                    </button>
                  </div>{" "}
                  {/* form-group// */}
                </>
              )}
            </form>
          </div>{" "}
          {/* card-body.// */}
        </div>
      </div>
    </section>
  );
}
