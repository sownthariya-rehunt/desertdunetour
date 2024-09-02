import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pd_thumb from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
import pd_thumb1 from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import pd_thumb2 from "../../../assets/image_desert/AbuDhabiCityTour/2.png";
import pd_thumb3 from "../../../assets/image_desert/AbuDhabiCityTour/3.png";

import pr_1 from "../../../assets/images/package/pr-1.png";

import gallery1Img from "../../../assets/image_desert/DesertSafariPictures/2.png";
import gallery2Img from "../../../assets/image_desert/DesertSafariPictures/3.png";
import gallery4Img from "../../../assets/image_desert/DesertSafariPictures/4.png";
import gallery5Img from "../../../assets/image_desert/DesertSafariPictures/5.png";
// import  from "../../../assets/image_desert/DesertSafariPictures/6.png";

import galleryGxx1Img from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import galleryGxx2Img from "../../../assets/image_desert/AbuDhabiCityTour/2.png";
import galleryGxx3Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png";

import galleryGxl1Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
import galleryGxl2Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
import galleryGxl3Img from "../../../assets/image_desert/Quad Bike Pictures.png";

import sidebarBannar from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DaytripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const startDate = this.state.startDate;

    return (
      <>
   <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Tour Package Details</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Package Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="package-details">

                  <div className="package-header">
                    <div className="package-title">
                      <h3>SUNRISE DESERT SAFARI</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Price: Adult: AED 263 Child: AED 210 (Min 2 pax)
                      </strong>
                    </div>
                    {/* <div className="pd-review">
                      <p>Excellent</p>
                      <ul>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>800 Review</p>
                    </div> */}
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>Daily Tour</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>1 Days</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>30 People</p>
                      </div>
                    </div>
                    {/* <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>Languages</strong>
                        <p>Any Language</p>
                      </div>
                    </div> */}
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Travel Plan
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="flaticon-gallery" />
                          Our Gallary
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                    <a href="https://wa.me/971586150070" target="blank" >  {" "}
                    <button
                        className="nav-link"
                        type="button"
                         role="tab"
                      >
                   
                        <FontAwesomeIcon icon={faWhatsapp} className="fs-4" sx={2} /> 
                     &nbsp; Book 
                      </button>

                      </a>
                    </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the stunning Desert Sunrise on this
                                  morning adventure. Explore the golden sands
                                  with thrilling Dune Bashing and Sand Boarding.
                                  Visit a Camel Farm, ride a Camel, and enjoy
                                  refreshing Water/Soft Drinks amidst the desert
                                  beauty.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Highlight</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Desert Sunrise experience</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Dune Bashing</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Sand Boarding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Farm Visit</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Riding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Water/Soft Drinks </p>
                                  </li>
                                  <p>
                                    Enjoy a memorable morning in the desert with
                                    a blend of adventure and serenity.
                                  </p>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destination</td>
                                      <td>New York City</td>
                                    </tr>
                                    <tr>
                                      <td>Depature</td>
                                      <td>Yes Required</td>
                                    </tr>
                                    <tr>
                                      <td>Departure Time</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Return Time</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Included</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Specilaized Bilingual Guide
                                          </li>
                                          <li>
                                            {" "}
                                            <i className="bx bx-check" />{" "}
                                            Private Transport
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Entrance Fees
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Lunch,Water,Dinner and Snacks
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Excluded</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {" "}
                                            <i className="bx bx-x" /> Additional
                                            Services
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Insurance
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Drink
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Tickets
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Travel With Bus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* <div className="p-rationg">
                                <h5>Rating</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excellent</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Accommodation</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transport</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comfort</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospitality</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Food</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the stunning Desert Sunrise on this
                                  morning adventure. Explore the golden sands
                                  with thrilling Dune Bashing and Sand Boarding.
                                  Visit a Camel Farm, ride a Camel, and enjoy
                                  refreshing Water/Soft Drinks amidst the desert
                                  beauty.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 1 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 2 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 3 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 4 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 5 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    {/* <Link
                                      to={}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={}
                                        alt="gallary-img"
                                      />
                                    </Link> */}
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    {/*                                  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-banner mt-40">
                                            <img   loading="lazy" src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 10% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------2nd details------------------ */}
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="package-details">
                  <div className="package-thumb">
                    <img   loading="lazy" src={pd_thumb1} alt="" />
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>HALF DAY DESERT SAFARI</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Price: Adult: AED 305 Child: AED 210
                      </strong>
                    </div>
                    <div className="pd-review">
                      <p>Excellent</p>
                      <ul>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>800 Review</p>
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>Daily Tour</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>1 Days</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>30 People</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>Languages</strong>
                        <p>Any Language</p>
                      </div>
                    </div>
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home1"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile1"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Travel Plan
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact1"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="flaticon-gallery" />
                          Our Gallary
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home1"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the enchanting desert from
                                  afternoon till evening on this Half Day Desert
                                  Safari. From 3:30 pm to 9:30 pm, engage in a
                                  blend of adventure and cultural immersion,
                                  filled with activities and delights for all
                                  ages.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Highlight</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Desert Sunrise experience</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Dune Bashing</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Sand Boarding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Farm Visit</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Riding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Henna painting </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Belly Dance </p>
                                  </li>

                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Tanoura Dance </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>BBQ Dinner </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Falcon & Arabic Costume for Picture </p>
                                  </li>

                                  <p>
                                    Indulge in an action-packed morning escapade
                                    in the mesmerizing desert landscape.
                                  </p>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destination</td>
                                      <td>New York City</td>
                                    </tr>
                                    <tr>
                                      <td>Depature</td>
                                      <td>Yes Required</td>
                                    </tr>
                                    <tr>
                                      <td>Departure Time</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Return Time</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Included</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Specilaized Bilingual Guide
                                          </li>
                                          <li>
                                            {" "}
                                            <i className="bx bx-check" />{" "}
                                            Private Transport
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Entrance Fees
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Lunch,Water,Dinner and Snacks
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Excluded</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {" "}
                                            <i className="bx bx-x" /> Additional
                                            Services
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Insurance
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Drink
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Tickets
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Travel With Bus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="p-rationg">
                                <h5>Rating</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excellent</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Accommodation</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transport</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comfort</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospitality</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Food</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile1"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the stunning Desert Sunrise on this
                                  morning adventure. Explore the golden sands
                                  with thrilling Dune Bashing and Sand Boarding.
                                  Visit a Camel Farm, ride a Camel, and enjoy
                                  refreshing Water/Soft Drinks amidst the desert
                                  beauty.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 1 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 2 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 3 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 4 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 5 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact1"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    {/* <Link
                                      to={}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={}
                                        alt="gallary-img"
                                      />
                                    </Link> */}
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    {/*                                  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-banner mt-40">
                                            <img   loading="lazy" src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 10% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------3rd--------------- */}
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="package-details">
                  <div className="package-thumb">
                    <img   loading="lazy" src={pd_thumb2} alt="" />
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>MORNING DESERT SAFARI</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Price: Adult: AED 263 Child: AED 210 (Min 2 pax)
                      </strong>
                    </div>
                    <div className="pd-review">
                      <p>Excellent</p>
                      <ul>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>800 Review</p>
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>Daily Tour</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>1 Days</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>30 People</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>Languages</strong>
                        <p>Any Language</p>
                      </div>
                    </div>
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home3"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile3"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Travel Plan
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact3"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="flaticon-gallery" />
                          Our Gallary
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home3"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Overview</h5>
                                <p>
                                  Embark on a thrilling morning adventure in the
                                  desert from 8:00 am to 12:00 pm. Feel the rush
                                  of Dune Bashing and Sand Boarding as you
                                  navigate the sandy terrain. Immerse in the
                                  local culture with a Camel Farm Visit, Camel
                                  Riding, and savor Water/Soft Drinks in this
                                  unique experience. Inclusions:
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Highlight</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Desert Sunrise experience</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Dune Bashing</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Sand Boarding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Farm Visit</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Riding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Water/Soft Drinks </p>
                                  </li>
                                  <p>
                                    Indulge in an action-packed morning escapade
                                    in the mesmerizing desert landscape.
                                  </p>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destination</td>
                                      <td>New York City</td>
                                    </tr>
                                    <tr>
                                      <td>Depature</td>
                                      <td>Yes Required</td>
                                    </tr>
                                    <tr>
                                      <td>Departure Time</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Return Time</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Included</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Specilaized Bilingual Guide
                                          </li>
                                          <li>
                                            {" "}
                                            <i className="bx bx-check" />{" "}
                                            Private Transport
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Entrance Fees
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Lunch,Water,Dinner and Snacks
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Excluded</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {" "}
                                            <i className="bx bx-x" /> Additional
                                            Services
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Insurance
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Drink
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Tickets
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Travel With Bus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="p-rationg">
                                <h5>Rating</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excellent</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Accommodation</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transport</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comfort</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospitality</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Food</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile3"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the stunning Desert Sunrise on this
                                  morning adventure. Explore the golden sands
                                  with thrilling Dune Bashing and Sand Boarding.
                                  Visit a Camel Farm, ride a Camel, and enjoy
                                  refreshing Water/Soft Drinks amidst the desert
                                  beauty.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 1 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 2 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 3 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 4 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 5 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact3"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    {/* <Link
                                      to={}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={}
                                        alt="gallary-img"
                                      />
                                    </Link> */}
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    {/*                                  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-banner mt-40">
                                            <img   loading="lazy" src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 10% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------4th------------------------- */}
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="package-details">
                  <div className="package-thumb">
                    <img   loading="lazy" src={pd_thumb3} alt="" />
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>OVERNIGHT DESERT SAFARI</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Price: Adult: AED 500
                         Child: AED 399 (Min 2 pax)
                      </strong>
                    </div>
                    <div className="pd-review">
                      <p>Excellent</p>
                      <ul>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>800 Review</p>
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>Daily Tour</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>1 Days</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>30 People</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>Languages</strong>
                        <p>Any Language</p>
                      </div>
                    </div>
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home4"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile4"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Travel Plan
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact4"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="flaticon-gallery" />
                          Our Gallary
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home4"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Overview</h5>
                                <p>
                                Embark on an unforgettable adventure with our Overnight Desert Safari. Starting at 3:30 pm and lasting until 9:00 am the next day, this experience offers a unique blend of excitement and relaxation under the desert stars.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Highlight</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Desert Sunrise experience</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Dune Bashing</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Sand Boarding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Farm Visit</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Camel Riding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Water/Soft Drinks </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Falcon & Arabic Costume for Picture </p>
                                  </li><li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Overnight Stay</p>
                                  </li><li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Shisha </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>BBQ Dinner
                                     </p>
                                  </li>
                                 
                                  <p>
                                  Immerse yourself in the magic of the desert with a night to remember on our Overnight Desert Safari. For other activities, kindly provide the specific details for each one you'd like me to describe.
                                  </p>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destination</td>
                                      <td>New York City</td>
                                    </tr>
                                    <tr>
                                      <td>Depature</td>
                                      <td>Yes Required</td>
                                    </tr>
                                    <tr>
                                      <td>Departure Time</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Return Time</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Included</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Specilaized Bilingual Guide
                                          </li>
                                          <li>
                                            {" "}
                                            <i className="bx bx-check" />{" "}
                                            Private Transport
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{" "}
                                            Entrance Fees
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Lunch,Water,Dinner and Snacks
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Excluded</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {" "}
                                            <i className="bx bx-x" /> Additional
                                            Services
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Insurance
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Drink
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Tickets
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Travel With Bus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="p-rationg">
                                <h5>Rating</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excellent</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Accommodation</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transport</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comfort</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospitality</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Food</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile4"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Overview</h5>
                                <p>
                                  Experience the stunning Desert Sunrise on this
                                  morning adventure. Explore the golden sands
                                  with thrilling Dune Bashing and Sand Boarding.
                                  Visit a Camel Farm, ride a Camel, and enjoy
                                  refreshing Water/Soft Drinks amidst the desert
                                  beauty.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 1 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 2 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 3 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 4 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>DAY 5 : Departure And Small Tour</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie. Sed
                                      feugiat mi nec ex vehicula, nec vestibulum
                                      orci semper. Class aptent taciti sociosqu
                                      ad litora torquent per conubia nostra, per
                                      inceptos himenaeos. Donec tristique
                                      commodo fringilla.
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Specilaized Bilingual Guide
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Private Transport
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Entrance Fees
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Box Lunch,Water,Dinner and Snacks
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact4"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    {/* <Link
                                      to={}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={}
                                        alt="gallary-img"
                                      />
                                    </Link> */}
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img   loading="lazy"
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    {/*                                  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-banner mt-40">
                                            <img   loading="lazy" src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 10% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DaytripDetails;
