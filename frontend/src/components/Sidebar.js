import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link" to="/dashboard">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/productlist">
              <i class="mdi mdi-view-headline menu-icon"></i>
              <span class="menu-title">Products</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/orderlist">
              <i class="mdi mdi-cart-outline menu-icon"></i>
              <span class="menu-title">Orders</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/userlist">
              <i class="mdi mdi-account-multiple menu-icon"></i>
              <span class="menu-title">Users</span>
            </Link>
          </li>
         
          <li class="nav-item">
            <Link class="nav-link" to="/support">
              <i class="mdi mdi-comment-multiple-outline menu-icon"></i>
              <span class="menu-title">Support</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    );
  }
}
