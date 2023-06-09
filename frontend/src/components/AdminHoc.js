import React from "react";

import jQuery from "jquery";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

 const AdminHoc = (WrappedComponent) => {
  return class extends React.Component {
   
    componentDidMount() {
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
    
        // Hoverable collapse
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
      return (
        <div className="container-scroller">
          <Navbar></Navbar>
          <div className="container-fluid page-body-wrapper">
            <Sidebar></Sidebar>

            <div className="main-panel">
              <WrappedComponent></WrappedComponent>

              <Footer></Footer>
            </div>
          </div>
        </div>
      );
    }
  };
};


export default AdminHoc;