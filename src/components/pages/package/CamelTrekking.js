import React, { Component } from "react";

import pd_thumb from "../../../assets/image_desert/new_pic/Camel Trekking/1.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1Img from "../../../assets/image_desert/new_pic/Camel Trekking/2.png";
import gallery2Img from "../../../assets/image_desert/new_pic/Camel Trekking/1.png";
import gallery4Img from "../../../assets/image_desert/new_pic/Camel Trekking/3.png";
import gallery5Img from "../../../assets/image_desert/new_pic/Camel Trekking/4.png";
import gallery6Img from "../../../assets/image_desert/new_pic/Camel Trekking/5.png";

import galleryGxx1Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import galleryGxx2Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/2.png";

import "react-datepicker/dist/react-datepicker.css";

import SellIcon from '@mui/icons-material/Sell';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import "../home/Slider_tab.css"
class CamelTrekking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  changeDatepickerHandler = (date) => {
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
        title: "Dune Bashing",
      },
      {
        img: gallery2Img,
        title: "Sand Boarding",
      },
      {
        img: gallery4Img,
        title: "Camel Farm",
      },
      {
        img: gallery5Img,
        title: "Henna Painting",
      },
      {
        img: gallery6Img,
        title: "Belly Dance",
      },
      {
        img: galleryGxx1Img,
        title: "BBQ Dinner",
      },
      {
        img: galleryGxx2Img,
        title: "Falcon",
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
                          <div
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                            key={item.img}
                          >
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
                      <h3> CAMEL TREKKING</h3>
                      <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED 315 ,</span> Child:  <span className="text-dark" >AED 210</span> (minimum 2
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
                    <p>220 Review</p>
                  </div> */}
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>08:00 am - 12:00 pm</p>
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
                        <a href="https://wa.me/971586150070" target="blank">
                          {" "}
                          <button className="nav-link" type="button" role="tab">
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="fs-4"
                              sx={2}
                            />
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
                                  Experience the timeless charm and tranquility
                                  of the desert on our Camel Trekking adventure,
                                  a journey that promises to take you back to
                                  the roots of Arabian culture. As the sun rises
                                  and bathes the desert in golden hues, embark
                                  on a traditional camel trekking experience
                                  that will leave you in awe of the vast expanse
                                  of sand and sky. The Camel Trekking tour
                                  offers a unique opportunity to immerse
                                  yourself in the ancient mode of transportation
                                  that has been an integral part of Arabian
                                  heritage for centuries. Let the gentle swaying
                                  of the camel's gait lull you into a state of
                                  bliss as you traverse the serene desert
                                  landscape. Feel the connection with nature as
                                  you ride through the dunes, taking in the
                                  beauty of the surroundings. Our experienced
                                  guides will ensure your safety and comfort
                                  throughout the journey, providing insights
                                  into the desert's secrets and stories. Enjoy a
                                  30-minute camel riding session that will leave
                                  you with unforgettable memories of this
                                  timeless adventure. Stay refreshed with
                                  complimentary water and soft drinks, keeping
                                  you energized and hydrated during your camel
                                  trekking experience.{" "}
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Inclusions:</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      {" "}
                                      Convenient Pickup and Drop-off service
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      {" "}
                                      30 minutes of Camel Riding experience
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Complimentary Water and Soft Drinks</p>
                                  </li>

                                  <p>
                                    Embark on this Camel Trekking journey and
                                    connect with the essence of the desert as
                                    you ride through the iconic sands on the
                                    back of these majestic creatures. Let the
                                    rhythm of the camels' footsteps guide you
                                    through a peaceful and authentic desert
                                    experience that will stay etched in your
                                    memory for years to come.
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

export default CamelTrekking;
