import React from 'react';
import { Link } from 'react-router-dom';
import carousel8 from '../assets/images/carousel/carousel8.jpg';
import carousel3 from '../assets/images/carousel/03.jpg';
import carousel1 from '../assets/images/carousel/01.jpg';
import avatar6 from '../assets/images/portrait/small/avatar-s-6.png';
import avatar3 from '../assets/images/portrait/small/avatar-s-3.png';
import avatar19 from '../assets/images/portrait/small/avatar-s-19.png';

const Navbar = () => {
  return (
    <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
      <div className="navbar-wrapper">
        <div className="navbar-container content">
          <div className="collapse navbar-collapse show" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item mobile-menu d-md-none mr-auto">
                  <Link
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                    to="#"
                  >
                    <i className="ft-menu font-large-1" />
                  </Link>
                </li>
                <li className="nav-item d-none d-md-block">
                  <Link
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                    to="#"
                  >
                    <i className="ft-menu" />
                  </Link>
                </li>
                <li className="nav-item d-none d-md-block">
                  <Link className="nav-link nav-link-expand" to="#">
                    <i className="ficon ft-maximize" />
                  </Link>
                </li>
                <li className="dropdown nav-item mega-dropdown d-none d-md-block">
                  <Link
                    className="dropdown-toggle nav-link"
                    to="#"
                    data-toggle="dropdown"
                  >
                    Mega
                  </Link>
                  <ul className="mega-dropdown-menu dropdown-menu row">
                    <li className="col-md-2">
                      <h6 className="dropdown-menu-header text-uppercase mb-1">
                        <i className="ft-link" /> Quick Links
                      </h6>
                      <ul>
                        <li>
                          <Link className="my-1" to="chat-application.html">
                            <i className="ft-home" /> Chat
                          </Link>
                        </li>
                        <li>
                          <Link className="my-1" to="table-bootstrap.html">
                            <i className="ft-grid" /> Tables
                          </Link>
                        </li>
                        <li>
                          <Link className="my-1" to="chartist-charts.html">
                            <i className="ft-bar-chart" /> Charts
                          </Link>
                        </li>
                        <li>
                          <Link className="my-1" to="gallery-grid.html">
                            <i className="ft-sidebar" /> Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="col-md-3">
                      <h6 className="dropdown-menu-header text-uppercase mb-1">
                        <i className="ft-star" /> My Bookmarks
                      </h6>
                      <ul className="ml-2">
                        <li className="list-style-circle">
                          <Link className="my-1" to="card-bootstrap.html">
                            Cards
                          </Link>
                        </li>
                        <li className="list-style-circle">
                          <Link className="my-1" to="full-calender.html">
                            {" "}
                            Calender
                          </Link>
                        </li>
                        <li className="list-style-circle">
                          <Link className="my-1" to="invoice-template.html">
                            {" "}
                            Invoice
                          </Link>
                        </li>
                        <li className="list-style-circle">
                          <Link className="my-1" to="users-contacts.html">
                            {" "}
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="col-md-3">
                      <h6 className="dropdown-menu-header text-uppercase">
                        <i className="ft-layers" /> Recent Products
                      </h6>
                      <div
                        className="carousel slide pt-1"
                        id="carousel-example"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src={carousel8}
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src={carousel3}
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src={carousel1}
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <Link
                          className="carousel-control-prev"
                          to="#carousel-example"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="la la-angle-left"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Previous</span>
                        </Link>
                        <Link
                          className="carousel-control-next"
                          to="#carousel-example"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="la la-angle-right icon-next"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Next</span>
                        </Link>
                        <h5 className="pt-1">Special title treatment</h5>
                        <p>Jelly beans sugar plum.</p>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <h6 className="dropdown-menu-header text-uppercase mb-1">
                        <i className="ft-thumbs-up" /> Get in touch
                      </h6>
                      <form className="form form-horizontal pt-1">
                        <div className="form-body">
                          <div className="form-group row">
                            <label
                              className="col-sm-3 form-control-label"
                              htmlFor="inputName1"
                            >
                              Name
                            </label>
                            <div className="col-sm-9">
                              <div className="position-relative has-icon-left">
                                <input
                                  className="form-control"
                                  id="inputName1"
                                  type="text"
                                  placeholder="John Doe"
                                />
                                <div className="form-control-position pl-1">
                                  <i className="ft-user" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-sm-3 form-control-label"
                              htmlFor="inputContact1"
                            >
                              Contact
                            </label>
                            <div className="col-sm-9">
                              <div className="position-relative has-icon-left">
                                <input
                                  className="form-control"
                                  id="inputContact1"
                                  type="text"
                                  placeholder="(123)-456-7890"
                                />
                                <div className="form-control-position pl-1">
                                  <i className="ft-smartphone" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-sm-3 form-control-label"
                              htmlFor="inputEmail1"
                            >
                              Email
                            </label>
                            <div className="col-sm-9">
                              <div className="position-relative has-icon-left">
                                <input
                                  className="form-control"
                                  id="inputEmail1"
                                  type="email"
                                  placeholder="john@example.com"
                                />
                                <div className="form-control-position pl-1">
                                  <i className="ft-mail" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-sm-3 form-control-label"
                              htmlFor="inputMessage1"
                            >
                              Message
                            </label>
                            <div className="col-sm-9">
                              <div className="position-relative has-icon-left">
                                <textarea
                                  className="form-control"
                                  id="inputMessage1"
                                  rows={2}
                                  placeholder="Simple Textarea"
                                />
                                <div className="form-control-position pl-1">
                                  <i className="ft-message-circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 mb-1">
                              <button
                                className="btn btn-danger float-right"
                                type="button"
                              >
                                <i className="ft-arrow-right" />
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </li>
                <li className="dropdown d-none d-md-block mr-1">
                  <Link
                    className="dropdown-toggle nav-link"
                    id="apps-navbar-links"
                    to="#"
                    data-toggle="dropdown"
                  >
                    Apps
                  </Link>
                  <div className="dropdown-menu">
                    <div className="arrow_box">
                      <Link
                        className="dropdown-item"
                        to="email-application.html"
                      >
                        <i className="ft-user" />
                        Email
                      </Link>
                      <Link className="dropdown-item" to="chat-application.html">
                        <i className="ft-mail" /> Chat
                      </Link>
                      <Link className="dropdown-item" to="project-summary.html">
                        <i className="ft-briefcase" /> Project Summary
                      </Link>
                      <Link className="dropdown-item" to="full-calender.html">
                        <i className="ft-calendar" /> Calendar{" "}
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown navbar-search">
                  <Link
                    className="nav-link dropdown-toggle hide"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <i className="ficon ft-search" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="arrow_box">
                      <form>
                        <div className="input-group search-box">
                          <div className="position-relative has-icon-right full-width">
                            <input
                              className="form-control"
                              id="search"
                              type="text"
                              placeholder="Search here..."
                            />
                            <div className="form-control-position navbar-search-close">
                              <i className="ft-x" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-language nav-item">
                  <Link
                    className="dropdown-toggle nav-link"
                    id="dropdown-flag"
                    to="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-us" />
                    <span className="selected-language" />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdown-flag"
                  >
                    <div className="arrow_box">
                      <Link className="dropdown-item" to="#">
                        <i className="flag-icon flag-icon-us" />
                        English
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="flag-icon flag-icon-cn" /> Chinese
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="flag-icon flag-icon-ru" /> Russian
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="flag-icon flag-icon-fr" /> French
                      </Link>
                      <Link className="dropdown-item" to="#">
                        <i className="flag-icon flag-icon-es" /> Spanish
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <Link
                    className="nav-link nav-link-label"
                    to="#"
                    data-toggle="dropdown"
                  >
                    <i
                      className="ficon ft-bell bell-shake"
                      id="notification-navbar-link"
                    />
                    <span className="badge badge-pill badge-sm badge-danger badge-up badge-glow">
                      5
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <div className="arrow_box_right">
                      <li className="dropdown-menu-header">
                        <h6 className="dropdown-header m-0">
                          <span className="grey darken-2">Notifications</span>
                        </h6>
                      </li>
                      <li className="scrollable-container media-list w-100 ps">
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left align-self-center">
                              <i className="ft-share info font-medium-4 mt-2" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading info">
                                New Order Received
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Lorem ipsum dolor sit amet!
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  3:30 PM
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left align-self-center">
                              <i className="ft-save font-medium-4 mt-2 warning" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading warning">
                                New User Registered
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Aliquam tincidunt mauris eu risus.
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  10:05 AM
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left align-self-center">
                              <i className="ft-repeat font-medium-4 mt-2 danger" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading danger">
                                New Purchase
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Lorem ipsum dolor sit ametest?
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  Yesterday
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left align-self-center">
                              <i className="ft-shopping-cart font-medium-4 mt-2 primary" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading primary">
                                New Item In Your Cart
                              </h6>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  Last week
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left align-self-center">
                              <i className="ft-heart font-medium-4 mt-2 info" />
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading info">New Sale</h6>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  Last month
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <div
                          className="ps__rail-x"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                          />
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: 0, right: 0 }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex={0}
                            style={{ top: 0, height: 0 }}
                          />
                        </div>
                      </li>
                      <li className="dropdown-menu-footer">
                        <Link
                          className="dropdown-item info text-right pr-1"
                          to="javascript:void(0)"
                        >
                          Read all
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <Link
                    className="nav-link nav-link-label"
                    to="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-mail"> </i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <div className="arrow_box_right">
                      <li className="dropdown-menu-header">
                        <h6 className="dropdown-header m-0">
                          <span className="grey darken-2">Messages</span>
                        </h6>
                      </li>
                      <li className="scrollable-container media-list w-100 ps">
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm rounded-circle">
                                <img
                                  src={avatar6}
                                  alt="avatar"
                                />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading text-bold-700">
                                Sarah Montery
                                <i className="ft-circle font-small-2 success float-right" />
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Everything looks good. I will provide...
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  3:55 PM
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm rounded-circle">
                                <span className="media-object rounded-circle text-circle bg-warning">
                                  E
                                </span>
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading text-bold-700">
                                Eliza Elliot
                                <i className="ft-circle font-small-2 danger float-right" />
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Okay. here is some more details...
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  2:10 AM
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm rounded-circle">
                                <img
                                  src={avatar3}
                                  alt="avatar"
                                />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading text-bold-700">
                                Kelly Reyes
                                <i className="ft-circle font-small-2 warning float-right" />
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                Check once and let me know if you...
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  Yesterday
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link to="javascript:void(0)">
                          <div className="media">
                            <div className="media-left">
                              <span className="avatar avatar-sm rounded-circle">
                                <img
                                  src={avatar19}
                                  alt="avatar"
                                />
                              </span>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading text-bold-700">
                                Tonny Deep
                                <i className="ft-circle font-small-2 danger float-right" />
                              </h6>
                              <p className="notification-text font-small-3 text-muted text-bold-600">
                                We will start new project development...
                              </p>
                              <small>
                                <time
                                  className="media-meta text-muted"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  Friday
                                </time>
                              </small>
                            </div>
                          </div>
                        </Link>
                        <div
                          className="ps__rail-x"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                          />
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: 0, right: 0 }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex={0}
                            style={{ top: 0, height: 0 }}
                          />
                        </div>
                      </li>
                      <li className="dropdown-menu-footer">
                        <Link
                          className="dropdown-item text-right info pr-1"
                          to="javascript:void(0)"
                        >
                          Read all
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <Link
                    className="dropdown-toggle nav-link dropdown-user-link"
                    to="#"
                    data-toggle="dropdown"
                  >
                    {" "}
                    <span className="avatar avatar-online">
                      <img
                        src={avatar19}
                        alt="avatar"
                      />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="arrow_box_right">
                      <Link className="dropdown-item" to="#">
                        <span className="avatar avatar-online">
                          <img
                            src={avatar19}
                            alt="avatar"
                          />
                          <span className="user-name text-bold-700 ml-1">
                            John Doe
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="user-profile.html">
                        <i className="ft-user" /> Edit Profile
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="email-application.html"
                      >
                        <i className="ft-mail" /> My Inbox
                      </Link>
                      <Link className="dropdown-item" to="project-summary.html">
                        <i className="ft-check-square" /> Task
                      </Link>
                      <Link className="dropdown-item" to="chat-application.html">
                        <i className="ft-message-square" /> Chats
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to={'/login'}>
                        <i className="ft-power" /> Logout
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar
