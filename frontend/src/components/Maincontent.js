import React, { Component } from 'react'

export default class Maincontent extends Component {
    render() {
        return (
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
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="purchases-tab"
                          data-toggle="tab"
                          href="#purchases"
                          role="tab"
                          aria-controls="purchases"
                          aria-selected="false"
                        >
                          Purchases
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
                            <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Start date
                              </small>
                              <div className="dropdown">
                                <a
                                  className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLinkA"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <h5 className="mb-0 d-inline-block">
                                    26 Jul 2018
                                  </h5>
                                </a>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkA"
                                >
                                  <a className="dropdown-item" href="#">
                                    12 Aug 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    22 Sep 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    21 Oct 2018
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Revenue
                              </small>
                              <h5 className="mr-2 mb-0">$577545</h5>
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
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-download mr-3 icon-lg text-warning" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Downloads
                              </small>
                              <h5 className="mr-2 mb-0">2233783</h5>
                            </div>
                          </div>
                          <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-flag mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Flagged
                              </small>
                              <h5 className="mr-2 mb-0">3497843</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="sales"
                        role="tabpanel"
                        aria-labelledby="sales-tab"
                      >
                        <div className="d-flex flex-wrap justify-content-xl-between">
                          <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Start date
                              </small>
                              <div className="dropdown">
                                <a
                                  className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLinkA"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <h5 className="mb-0 d-inline-block">
                                    26 Jul 2018
                                  </h5>
                                </a>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkA"
                                >
                                  <a className="dropdown-item" href="#">
                                    12 Aug 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    22 Sep 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    21 Oct 2018
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-download mr-3 icon-lg text-warning" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Downloads
                              </small>
                              <h5 className="mr-2 mb-0">2233783</h5>
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
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Revenue
                              </small>
                              <h5 className="mr-2 mb-0">$577545</h5>
                            </div>
                          </div>
                          <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-flag mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Flagged
                              </small>
                              <h5 className="mr-2 mb-0">3497843</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="purchases"
                        role="tabpanel"
                        aria-labelledby="purchases-tab"
                      >
                        <div className="d-flex flex-wrap justify-content-xl-between">
                          <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Start date
                              </small>
                              <div className="dropdown">
                                <a
                                  className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLinkA"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <h5 className="mb-0 d-inline-block">
                                    26 Jul 2018
                                  </h5>
                                </a>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLinkA"
                                >
                                  <a className="dropdown-item" href="#">
                                    12 Aug 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    22 Sep 2018
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    21 Oct 2018
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Revenue
                              </small>
                              <h5 className="mr-2 mb-0">$577545</h5>
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
                          <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-download mr-3 icon-lg text-warning" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Downloads
                              </small>
                              <h5 className="mr-2 mb-0">2233783</h5>
                            </div>
                          </div>
                          <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                            <i className="mdi mdi-flag mr-3 icon-lg text-danger" />
                            <div className="d-flex flex-column justify-content-around">
                              <small className="mb-1 text-muted">
                                Flagged
                              </small>
                              <h5 className="mr-2 mb-0">3497843</h5>
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
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Cash deposits</p>
                    <p className="mb-4">
                      To start a blog, think of a topic about and first
                      brainstorm party is ways to write details
                    </p>
                    <div
                      id="cash-deposits-chart-legend"
                      className="d-flex justify-content-center pt-3"
                    />
                    <canvas id="cash-deposits-chart" />
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Total sales</p>
                    <h1>$ 28835</h1>
                    <h4>Gross sales over the years</h4>
                    <p className="text-muted">
                      Today, many people rely on computers to do homework,
                      work, and create or store useful information. Therefore,
                      it is important{" "}
                    </p>
                    <div id="total-sales-chart-legend" />
                  </div>
                  <canvas id="total-sales-chart" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Recent Purchases</p>
                    <div className="table-responsive">
                      <table id="recent-purchases-listing" className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Status report</th>
                            <th>Office</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Gross amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jeremy Ortega</td>
                            <td>Levelled up</td>
                            <td>Catalinaborough</td>
                            <td>$790</td>
                            <td>06 Jan 2018</td>
                            <td>$2274253</td>
                          </tr>
                          <tr>
                            <td>Alvin Fisher</td>
                            <td>Ui design completed</td>
                            <td>East Mayra</td>
                            <td>$23230</td>
                            <td>18 Jul 2018</td>
                            <td>$83127</td>
                          </tr>
                          <tr>
                            <td>Emily Cunningham</td>
                            <td>support</td>
                            <td>Makennaton</td>
                            <td>$939</td>
                            <td>16 Jul 2018</td>
                            <td>$29177</td>
                          </tr>
                          <tr>
                            <td>Minnie Farmer</td>
                            <td>support</td>
                            <td>Agustinaborough</td>
                            <td>$30</td>
                            <td>30 Apr 2018</td>
                            <td>$44617</td>
                          </tr>
                          <tr>
                            <td>Betty Hunt</td>
                            <td>Ui design not completed</td>
                            <td>Lake Sandrafort</td>
                            <td>$571</td>
                            <td>25 Jun 2018</td>
                            <td>$78952</td>
                          </tr>
                          <tr>
                            <td>Myrtie Lambert</td>
                            <td>Ui design completed</td>
                            <td>Cassinbury</td>
                            <td>$36</td>
                            <td>05 Nov 2018</td>
                            <td>$36422</td>
                          </tr>
                          <tr>
                            <td>Jacob Kennedy</td>
                            <td>New project</td>
                            <td>Cletaborough</td>
                            <td>$314</td>
                            <td>12 Jul 2018</td>
                            <td>$34167</td>
                          </tr>
                          <tr>
                            <td>Ernest Wade</td>
                            <td>Levelled up</td>
                            <td>West Fidelmouth</td>
                            <td>$484</td>
                            <td>08 Sep 2018</td>
                            <td>$50862</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
