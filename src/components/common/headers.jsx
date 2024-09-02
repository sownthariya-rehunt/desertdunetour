import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//Import Image
import logoMain from "../../assets/image_desert/Logo-01-01.png";
import secondLogo from "../../assets/image_desert/Logo-01-01.png";
import Tabsidebar from "../common/Tabsidebar";
import "./Tab.css";
import Scroll from "./Scroll";
class Headers extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* =============== Topbar area start =============== */}
        {/* <div className="topbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 tob-contact-row">
                            <div className="topbar-contact">
                                <ul>
                                    <li>
                                        <i className="bx bxs-phone" />
                                        <a href="tel:+17632275032">+1 763-227-5032</a>
                                    </li>

                                    <li>
                                        <i className="bx bxs-envelope" />
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                            <div className="topbar-social">
                                <ul>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-facebook" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-whatsapp" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
                            <div className="custom-select languege-select">
                                <select>
                                    <option value={0}>ENG</option>
                                    <option value={1}>BAN</option>
                                    <option value={2}>FSP</option>
                                    <option value={3}>CHI</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        {/* =============== Topbar area end =============== */}

        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area">
            <div className="container-fluid  ">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex float-left justify-content-between col-5">
                      <Link
                        to={"/"}
                        className="navbar-brand"
                        onClick={this.scrollTop}
                      >
                        <img
                          loading="lazy"
                          src={logoMain}
                          alt=""
                          className="col-4 col-lg-4 col-md-6 col-ms-6 col-xl-12 col-xxl-12"
                        />
                      </Link>
                    </div>

                    <div className="navbar-icons">
                    
                                     
                      <div className="mobile-menu d-flex ">
                        <div className="top-search-bar m-0 d-block d-xl-none"></div>
                        <Link to={"#"} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10  col-sm-10 col-xs-8 ">
                  <nav className="main-nav">
                    <div className="navber-logo-sm col-8">
                      <img
                        loading="lazy"
                        src={secondLogo}
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <div className="col-6 golden-h5 ms-5">
                      <span className="col-12 ms-5"> &emsp;&emsp;Desert Dune Tours</span>
                    </div>

                    {/* <ul className=" ">
                        <li className="">
                          Tour Category
                          <div className="sub-menu">
                            <Tabsidebar />
                          </div>
                        </li>
                      </ul> */}

                    <ul className="col-6">
                      <li className="">
                        <NavLink to={"/"} className="">
                          Home
                        </NavLink>
                        {/* <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.scrollTop}>Home Page 1</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/home-page-2`} className="sub-item" onClick={this.scrollTop}>Home Page 2</NavLink>
                                                </li>
                                            </ul> */}
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={"about-us"}
                          onClick={this.scrollTop}
                          className=""
                        >
                          About
                        </NavLink>
                      </li>

                      <li className="has-child-menu  ">
                        <NavLink to={"/package1"} className="">
                          Package
                        </NavLink>
                        <i className="fl flaticon-plus ">
                          &nbsp;&nbsp;&nbsp;&nbsp;+
                        </i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package1"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Sunrise Desert Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package2"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Morning Desert Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package3"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Half Day Desert Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package4"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Over Nightdesert Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package5"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Camel Trekking
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package6"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Private Dune Dinner
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package7"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Liwa Full Day Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package8"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Liwa Overnight Safari
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package9"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Quad Bike Tour
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package10"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Abu Dhabi City Tour Half Day
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package11"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Abu Dhabi Modern City Tour Full Day
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package12"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Dubai City Tour
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={"/package13"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Al Ain Oasis Tour
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={"/contact"}
                          onClick={this.scrollTop}
                          className=""
                        >
                          Contact Us
                        </NavLink>
                      </li>
                   
                    </ul>
                    
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+17632275032`}>+971 25658820</Link>
                        </li>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+17632275032`}>+971 586150070</Link>
                        </li>

                        <li className="sidebar-single-contact">
                          <i className="bx bxs-envelope" />
                          <Link to={`mailto:info@desertdune.com`}>
                            info@desertdune.ae
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            {/* <form>
                        <div className="main-searchbar">
                            <div className="searchbar-close">
                                <i className="bx bx-x" />
                            </div>
                            <input type="text" placeholder="Search Here......" />
                            <div className="searchbar-icon">
                                <i className="bx bx-search" />
                            </div>
                        </div>
                    </form> */}
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }
}

export default Headers;
