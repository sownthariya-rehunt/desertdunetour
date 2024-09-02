import React, { Component } from "react";
import { Link } from "react-router-dom";

import pd_thumb from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import pd_thumb1 from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import pd_thumb2 from "../../../assets/image_desert/AbuDhabiCityTour/2.png";
import pd_thumb3 from "../../../assets/image_desert/AbuDhabiCityTour/3.png";

import pr_1 from "../../../assets/images/package/pr-1.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import gallery2Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/2.png";
import gallery4Img from "../../../assets/image_desert/DesertSafariPictures/4.png";
import gallery5Img from "../../../assets/image_desert/DesertSafariPictures/5.png";
// import gallery6Img from "../../../assets/image_desert/DesertSafariPictures/6.png";
import "../home/Slider_tab.css"
// DesertSafariPictures/2.png
import galleryGxx1Img from "../../../assets/image_desert/DesertSafariPictures/2.png";
import galleryGxx2Img from "../../../assets/image_desert/DesertSafariPictures/3.png";
// import galleryGxx3Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png";

// import galleryGxl1Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
// import galleryGxl2Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
// import galleryGxl3Img from "../../../assets/image_desert/Quad Bike Pictures.png";
import SellIcon from '@mui/icons-material/Sell';
import sidebarBannar from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
class SunriseDesertDetails extends Component {
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
    const itemData = [
      {
        img: gallery1Img,
        title: "Breakfast",
      },
      {
        img: gallery2Img,
        title: "Burger",
      },
      // {
      //   img: gallery4Img,
      //   title: "Camera",
      // },
      {
        img: gallery5Img,
        title: "Coffee",
      },
      // {
      //   img: gallery6Img,
      //   title: "Hats",
      // },
      {
        img: galleryGxx1Img,
        title: "Honey",
      },
      {
        img: galleryGxx2Img,
        title: "Basketball",
      },
    ];

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
        <div className="package-details-wrapper pt-120 ms-5 me-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="package-details">
                <div className="package-thumb">


<div
     id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="500"
>
  <div className="carousel-inner">
    {itemData.map((item, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.img}>
        <img
          src={item.img}
          className="d-block w-100"
          alt="..."
        />
      </div>
    ))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>SUNRISE DESERT SAFARI</h3>
                      <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED 263 ,</span> Child:  <span className="text-dark" >AED 210</span> (minimum 2
                        pax)</b></i>
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
                        <p>04:30 am - 09:30 am</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>1 Day</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>2 People</p>
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
                                  Embark on an unforgettable adventure with our
                                  Sunrise Desert Safari, a journey that will
                                  leave you mesmerized by the beauty of the
                                  desert at dawn. This unique experience begins
                                  before the crack of dawn, immersing you in the
                                  tranquil atmosphere as the sun rises over the
                                  dunes. Feel the thrill of dune bashing, a
                                  heart-pounding activity that will get your
                                  adrenaline pumping. Dive into the adventure of
                                  sandboarding down the sandy slopes, a must-try
                                  for the adventure seekers. Visit a charming
                                  camel farm and get up close with these gentle
                                  creatures. Enjoy a peaceful camel ride, the
                                  perfect way to take in the serene
                                  surroundings. Stay refreshed with
                                  complimentary water and soft drinks throughout
                                  the journey.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Inclusions:</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      {" "}
                                      Witness the breathtaking Desert Sunrise
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      {" "}
                                      Experience the exhilarating Dune Bashing
                                    </p>
                                  </li>
                                 
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Enjoy the thrill of Sand Boarding</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Visit a traditional Camel Farm</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Take a leisurely Camel Ride</p>
                                  </li>

                                  <p>
                                    Join us on this magical sunrise escapade and
                                    create lasting memories in the vast expanse
                                    of the desert.
                                  </p>
                                </ul>
                              </div>
                              {/* <div className="p-highlight">
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
                              </div> */}

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
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <ImageList
                            cols={3}
                       
                          >
                            {itemData.map((item) => (
                              <ImageListItem key={item.img}>
                                <img
                                  srcSet={`${item.img}`}
                                  src={`${item.img}`}
                                  alt={item.title}
                                  loading="lazy"
                                  width={100}
                                  height={100}
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                        </div>
                      </div>
                    </div>
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

export default SunriseDesertDetails;
