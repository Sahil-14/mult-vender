import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
    if (!newLat || !newLng) {
      moveOn = window.confirm(
        "You did not set your location on map. Continue?"
      );
    }
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
          country,
          lat: newLat,
          lng: newLng,
        })
      );
      props.history.push("/payment");
    }
  };
  //first save current data
  const chooseOnMap = () => {
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        postalCode,
        country,
        lat,
        lng,
      })
    );
    props.history.push("/map");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <section className="section-content padding-y">
        <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">Shipping Address</h4>
            </header>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <input
                  className="form-control"
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>{" "}
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  required
                />
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-row">
                <div className="col form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>{" "}
                <div className="col form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>{" "}
              </div>{" "}
              <div className="form-group">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="form-control"
                  required
                />
              </div>{" "}
              {/* form-row.// */}
              <div className="form-group">
                <label htmlFor="chooseOnMap">Location</label>
                <button
                  type="button"
                  onClick={chooseOnMap}
                  className="btn btn-primary btn-block"
                  disabled
                >
                  Choose On Map
                </button>
              </div>{" "}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Continue
                </button>
              </div>{" "}
            </form>
          </article>
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        <br />
        <br />
      </section>
    </div>
  );
}
