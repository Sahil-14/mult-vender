import React from "react";
import logo from "../logo.svg";
const Mainfooter = () => {
  return (
    <footer className="section-footer border-top">
      <div className="container">
        <section className="footer-top padding-y">
          <div className="row">
            <aside className="col-md-4">
              <article className="mr-3">
                <img src={logo} className="logo-footer" />
                <p className="mt-3">
                  Some short text about company like You might remember the Dell
                  computer commercials in which a youth reports this exciting
                  news to his friends.
                </p>
                <div>
                  <a
                    className="btn btn-icon btn-light mr-1"
                    title="Facebook"
                    target="_blank"
                    href="#"
                  >
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-icon btn-light mr-1"
                    title="Instagram"
                    target="_blank"
                    href="#"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    className="btn btn-icon btn-light mr-1"
                    title="Youtube"
                    target="_blank"
                    href="#"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                  <a
                    className="btn btn-icon btn-light"
                    title="Twitter"
                    target="_blank"
                    href="#"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </article>
            </aside>
            <aside className="col-sm-3 col-md-2">
              <h6 className="title">About</h6>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Rules and terms</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-3 col-md-2">
              <h6 className="title">Services</h6>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="#">Help center</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Money refund</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Terms and Policy</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Open dispute</a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-3  col-md-2">
              <h6 className="title">For users</h6>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="#"> User Login </a>
                </li>
                <li>
                  {" "}
                  <a href="#"> User register </a>
                </li>
                <li>
                  {" "}
                  <a href="#"> Account Setting </a>
                </li>
                <li>
                  {" "}
                  <a href="#"> My Orders </a>
                </li>
              </ul>
            </aside>
            <aside className="col-sm-2  col-md-2">
              <h6 className="title">Our app</h6>
            </aside>
          </div>{" "}
          {/* row.// */}
        </section>{" "}
        {/* footer-top.// */}
        <section className="footer-copyright border-top">
         
          <p className="text-muted"> © 2020 Company All rights resetved </p>
        </section>
      </div>
      {/* //container */}
    </footer>
  );
};

export default Mainfooter;
