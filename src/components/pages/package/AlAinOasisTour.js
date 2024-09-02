import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import SellIcon from '@mui/icons-material/Sell';
import pd_thumb from "../../../assets/image_desert/new_pic/Camel Trekking/1.png";
import gallery1Img from "../../../assets/image_desert/Al Ain  Tour/1.png";
import gallery2Img from "../../../assets/image_desert/Al Ain  Tour/2.png";
import gallery4Img from "../../../assets/image_desert/Al Ain  Tour/3.png";
import gallery5Img from "../../../assets/image_desert/Al Ain  Tour/4.png";
// import gallery6Img from "../../../assets/iimage_desert/Al Ain  Tour/5.png";
// import galleryGxx1Img from "../../../assets/image_desert/Al Ain  Tour/6.png";
// import galleryGxx2Img from "../../../assets/image_desert/Al Ain  Tour/1.png";
import "../home/Slider_tab.css"
class AlAinOasisTour extends Component {
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
      // {
      //   img: gallery6Img,
      //   title: "Belly Dance",
      // },
      // {
      //   img: galleryGxx1Img,
      //   title: "BBQ Dinner",
      // },
      // {
      //   img: galleryGxx2Img,
      //   title: "Falcon",
      // },
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
                              alt={item.title}
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
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3> AL AIN OASIS TOUR</h3>

                      <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED 389 ,</span> Child:  <span className="text-dark" >AED 315</span> (minimum 2
                        pax)</b></i>
                        </strong>

                      {/* <strong>
                        <i className="flaticon-arrival" />
                        Price: AED 389 per adult, AED 315 per child (minimum 2 pax)
                      </strong> */}
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>09:00 am - 06:00 pm</p>
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
                          Our Gallery
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="https://wa.me/971586150070" target="_blank">
                          <button className="nav-link" type="button">
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
                                  Discover the hidden gems of Al Ain with our Al
                                  Ain Oasis Tour, a full-day expedition that
                                  unravels the cultural and natural wonders of
                                  this enchanting city. Nestled amidst towering
                                  desert landscapes, Al Ain boasts a rich
                                  tapestry of history and beauty waiting to be
                                  explored. From the lush greenery of Al Ain
                                  Oasis to the majestic Jabel Hafeet, prepare to
                                  be mesmerized at every turn. The tour kicks
                                  off with a visit to the renowned Jabel Hafeet,
                                  offering panoramic views that will leave you
                                  breathless. Immerse yourself in the local
                                  culture with a stop at the Camel Market, where
                                  you can witness the traditional way of life.
                                  Explore the picturesque Green Mubazzarah Park,
                                  a haven of tranquility with hot springs that
                                  will soothe your senses. Dive into the city's
                                  heritage with visits to the Al Ain National
                                  Museum or Al Jahili Fort, immersing yourself
                                  in the rich history of the region. Step into
                                  the opulent past at the Sheikh Zayed Palace
                                  Museum, a tribute to the UAE's founding
                                  father. Wander through the lush pathways of
                                  the Al Ain Oasis, where verdant palm groves
                                  create a serene oasis in the desert. Conclude
                                  your journey at the historic Qasr Al Muwaiji,
                                  a symbol of heritage and culture,
                                  encapsulating the essence of Al Ain's legacy.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Inclusions:</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Visit the breathtaking Jabel Hafeet</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Explore the authentic Camel Market</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      Relax at the serene Green Mubazzarah Park
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      Immerse yourself in history at Al Ain
                                      National Museum or Al Jahili Fort
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      Discover the opulence of the Sheikh Zayed
                                      Palace Museum
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Stroll through the lush Al Ain Oasis</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      Experience the heritage of Qasr Al Muwaiji
                                    </p>
                                  </li>
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

export default AlAinOasisTour;
