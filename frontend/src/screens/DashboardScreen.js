import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";
import { summaryOrder } from "../actions/orderActions";

import jQuery from "jquery";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

class DashboardScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const summaryOrder = this.props.summaryOrder;
    summaryOrder();

    (function ($) {
      "use strict";
      $(function () {
        var body = $("body");
        var contentWrapper = $(".content-wrapper");
        var scroller = $(".container-scroller");
        var footer = $(".footer");
        var sidebar = $(".sidebar");

        //Add active class to nav-link based on url dynamically
        //Active class can be hard coded directly in html file also as required

        function addActiveClass(element) {
          if (current === "") {
            //for root url
            if (element.attr("href").indexOf("index.html") !== -1) {
              element.parents(".nav-item").last().addClass("active");
              if (element.parents(".sub-menu").length) {
                element.closest(".collapse").addClass("show");
                element.addClass("active");
              }
            }
          } else {
            //for other url
            if (element.attr("href").indexOf(current) !== -1) {
              element.parents(".nav-item").last().addClass("active");
              if (element.parents(".sub-menu").length) {
                element.closest(".collapse").addClass("show");
                element.addClass("active");
              }
              if (element.parents(".submenu-item").length) {
                element.addClass("active");
              }
            }
          }
        }

        var current = window.location.pathname
          .split("/")
          .slice(-1)[0]
          .replace(/^\/|\/$/g, "");
        $(".nav li a", sidebar).each(function () {
          var $this = $(this);
          addActiveClass($this);
        });

        //Close other submenu in sidebar on opening any

        sidebar.on("show.bs.collapse", ".collapse", function () {
          sidebar.find(".collapse.show").collapse("hide");
        });

        //Change sidebar

        $('[data-toggle="minimize"]').on("click", function () {
          body.toggleClass("sidebar-icon-only");
        });

        //checkbox and radios
        $(".form-check label,.form-radio label").append(
          '<i class="input-helper"></i>'
        );
      });
    })(jQuery);


    (function ($) {
      "use strict";
      //Open submenu on hover in compact sidebar mode and horizontal menu mode
      $(document).on(
        "mouseenter mouseleave",
        ".sidebar .nav-item",
        function (ev) {
          var body = $("body");
          var sidebarIconOnly = body.hasClass("sidebar-icon-only");
          var sidebarFixed = body.hasClass("sidebar-fixed");
          if (!("ontouchstart" in document.documentElement)) {
            if (sidebarIconOnly) {
              if (sidebarFixed) {
                if (ev.type === "mouseenter") {
                  body.removeClass("sidebar-icon-only");
                }
              } else {
                var $menuItem = $(this);
                if (ev.type === "mouseenter") {
                  $menuItem.addClass("hover-open");
                } else {
                  $menuItem.removeClass("hover-open");
                }
              }
            }
          }
        }
      );
    })(jQuery);
  }
  render() {
    const { loading, summary, error } = this.props.orderSummary;

    return (
      <div className="container-scroller">
        <Navbar></Navbar>
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_sidebar.html */}
          <Sidebar></Sidebar>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex align-items-end flex-wrap">
                      <div className="mr-md-3 mr-xl-5">
                        <h2>Welcome back,</h2>
                        <p className="mb-md-0">
                          Your analytics dashboard template.
                        </p>
                      </div>
                      <div className="d-flex">
                        <i className="mdi mdi-home text-muted hover-cursor" />
                        <p className="text-muted mb-0 hover-cursor">
                          &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                        </p>
                        <p className="text-primary mb-0 hover-cursor">
                          Analytics
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon mr-3 d-none d-md-block "
                      >
                        <i className="mdi mdi-download text-muted" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0"
                      >
                        <i className="mdi mdi-clock-outline text-muted" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0"
                      >
                        <i className="mdi mdi-plus text-muted" />
                      </button>
                      <button className="btn btn-primary mt-2 mt-xl-0">
                        Download report
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                
              </div>
              {loading ? (
                <LoadingBox />
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body dashboard-tabs p-0">
                          <ul className="nav nav-tabs px-4" role="tablist">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="overview-tab"
                                data-toggle="tab"
                                href="#overview"
                                role="tab"
                                aria-controls="overview"
                                aria-selected="true"
                              >
                                Overview
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="sales-tab"
                                data-toggle="tab"
                                href="#sales"
                                role="tab"
                                aria-controls="sales"
                                aria-selected="false"
                              >
                                Sales
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content py-0 px-0">
                            <div
                              className="tab-pane fade show active"
                              id="overview"
                              role="tabpanel"
                              aria-labelledby="overview-tab"
                            >
                              <div className="d-flex flex-wrap justify-content-xl-between">
                                <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                  <i className="mdi mdi-account icon-lg mr-3 text-primary" />
                                  <div className="d-flex flex-column justify-content-around">
                                    <small className="mb-1 text-muted">
                                      Users
                                    </small>
                                    <h5 className="mr-2 mb-0">
                                      {" "}
                                      {summary.users[0].numUsers}
                                    </h5>
                                  </div>
                                </div>

                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                  <i className="mdi mdi-cart mr-3 icon-lg text-warning" />
                                  <div className="d-flex flex-column justify-content-around">
                                    <small className="mb-1 text-muted">
                                      Orders
                                    </small>
                                    <h5 className="mr-2 mb-0">
                                      {" "}
                                      {summary.orders[0]
                                        ? summary.orders[0].numOrders
                                        : 0}
                                    </h5>
                                  </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                  <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger" />
                                  <div className="d-flex flex-column justify-content-around">
                                    <small className="mb-1 text-muted">
                                      Sales
                                    </small>
                                    <h5 className="mr-2 mb-0">$ {summary.orders[0]
                          ? summary.orders[0].totalSales.toFixed(2)
                          : 0}</h5>
                                  </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                  <i className="mdi mdi-eye mr-3 icon-lg text-success" />
                                  <div className="d-flex flex-column justify-content-around">
                                    <small className="mb-1 text-muted">
                                      Total views
                                    </small>
                                    <h5 className="mr-2 mb-0">9833550</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                  <div className="row">
                    <div className="col-md-12 stretch-card">
                      <div className="card">
                        <div className="card-body">
                        <p className="card-title">Recent Purchases</p>
                      {summary.dailyOrders.length === 0 ? (
                        <MessageBox>No Sale</MessageBox>
                      ) : (
                        <Chart
                          width="100%"
                          height="400px"
                          chartType="AreaChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ["Date", "Sales"],
                            ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                          ]}
                        ></Chart>
                      )}
                        </div>

                      </div>
                      
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-12 stretch-card">
                      <div className="card">
                      <div className="card-body">
                      {summary.productCategories.length === 0 ? (
                      <MessageBox>No Category</MessageBox>
                    ) : (
                      <Chart
                        width="100%"
                        height="400px"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["Category", "Products"],
                          ...summary.productCategories.map((x) => [
                            x._id,
                            x.count,
                          ]),
                        ]}
                      />
                    )}
                      </div>
                      </div>
                    
                    </div>
                    
                  </div>
                </>
              )}
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <Footer></Footer>
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orderSummary: state.orderSummary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  summaryOrder: () => dispatch(summaryOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
