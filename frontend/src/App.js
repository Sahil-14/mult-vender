import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { listProductCategories } from "./actions/productActions";

// import $ from 'jquery'
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
// import ChatBox from "./components/ChatBox";

import PrivateRoute from "./components/PrivateRoute";
import SellerRoute from "./components/SellerRoute";
import Mainvavbar from "./components/Mainvavbar";
import AdminHoc from "./components/AdminHoc";
import CartScreen from "./screens/CartScreen";
import DashboardScreen from "./screens/DashboardScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";

import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";

import SearchScreen from "./screens/SearchScreen";
import SellerScreen from "./screens/SellerScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignInScreen from "./screens/SignInScreen";
import SupportScreen from "./screens/SupportScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";
import StyleSelector from "./components/StyleSelector";
import Mainfooter from "./components/Mainfooter";

function App() {

  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  // const userSignIn = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignIn;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  // const signoutHandler = () => {
  //   dispatch(signout());
  // };
  const UserListScreenWithHoc = AdminHoc(UserListScreen);
  const ProductListScreenWithHoc = AdminHoc(ProductListScreen);
  const OrderListScreenWithHoc = AdminHoc(OrderListScreen);
  // some scripts

// jquery end


  return (
    <BrowserRouter>
      <StyleSelector>
        <div className="grid-container">
          <Mainvavbar></Mainvavbar>
         {/* aside */}
          <main>
            <Route path="/seller/:id" component={SellerScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route exact path="/product/:id" component={ProductScreen}></Route>
            <Route
              exact
              path="/product/:id/edit"
              component={ProductEditScreen}
            ></Route>
            <Route path="/signin" component={SignInScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
            <Route
              path="/search/name/:name?"
              component={SearchScreen}
              exact
            ></Route>
            <Route
              path="/search/category/:category"
              component={SearchScreen}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name"
              component={SearchScreen}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              component={SearchScreen}
              exact
            ></Route>
            <PrivateRoute
              path="/profile"
              component={ProfileScreen}
            ></PrivateRoute>
            <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
            <AdminRoute
              exact
              path="/productlist"
              component={ProductListScreenWithHoc}
            ></AdminRoute>
            <AdminRoute
              exact
              path="/orderlist"
              component={OrderListScreenWithHoc}
            ></AdminRoute>
            <AdminRoute
              path="/userlist"
              component={UserListScreenWithHoc}
            ></AdminRoute>
            <AdminRoute
              path="/user/:id/edit"
              component={UserEditScreen}
            ></AdminRoute>
            <AdminRoute
              path="/dashboard"
              component={DashboardScreen}
            ></AdminRoute>
            <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
            <SellerRoute
              path="/productlist/seller"
              component={ProductListScreen}
            ></SellerRoute>
            <SellerRoute
              path="/orderlist/seller"
              component={OrderListScreen}
            ></SellerRoute>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <Mainfooter></Mainfooter>
        </div>
      </StyleSelector>
    </BrowserRouter>
  );
}

export default App;


{/* <footer className="row center">
{userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
<div>All right reserved</div>{" "}
</footer>{" "} */}


