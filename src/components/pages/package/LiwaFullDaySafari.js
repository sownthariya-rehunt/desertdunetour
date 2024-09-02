import React, { Component } from "react";

import pd_thumb from "../../../assets/image_desert/new_pic/Liwa Overnight/1.png";
import gallery1Img from "../../../assets/image_desert/Liwa Tour/1.png";
import gallery2Img from "../../../assets/image_desert/Liwa Tour/2.png";
import gallery4Img from "../../../assets/image_desert/Liwa Tour/3.png";
import gallery5Img from "../../../assets/image_desert/Liwa Tour/4.png";
import gallery6Img from "../../../assets/image_desert/Liwa Tour/5.png";

import galleryGxx1Img from "../../../assets/image_desert/Liwa Tour/6.png";
// import galleryGxx2Img from "../../../assets/image_desert/new_pic/Half Day Desert Safari (1)/6.png";

import SellIcon from '@mui/icons-material/Sell';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import "../home/Slider_tab.css"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
class LiwaFullDaySafari extends Component {
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
                    <h3>  LIWA FULL DAY SAFARI</h3>
                    <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED 2310</span>  <span className="text-dark" ></span> per private car </b></i>
                        </strong>



                  </div>
                 
                </div>
                <div className="p-short-info">
                  <div className="single-info">
                    <i className="flaticon-clock" />
                    <div className="info-texts">
                      <strong>Duration</strong>
                     
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
                      <p>4 People</p>
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
                              Embark on an extraordinary journey into the heart of the desert with our Liwa Full Day Safari, a comprehensive expedition that promises to unveil the mesmerizing beauty and grandeur of the Liwa region. Nestled amidst the towering dunes of the Empty Quarter, Liwa is a desert oasis that beckons adventurers and nature enthusiasts alike. The Liwa Full Day Safari offers a perfect blend of adventure, culture, and relaxation, allowing you to immerse yourself in the rich tapestry of Emirati heritage. As the day unfolds, set out on a private transfer to the Liwa region, where the vast expanse of golden sands stretches as far as the eye can see. Feel the thrill of a dune drive as you navigate the undulating terrain in a private car, experiencing the exhilaration of desert exploration. Delight in a delicious lunch amidst the tranquil beauty of Liwa Oasis, a verdant haven in the midst of the arid landscape. Explore the wonders of the oasis, discovering its lush palm groves and cool springs that offer respite from the desert heat. Stay refreshed with complimentary water and soft drinks throughout the day, ensuring you remain energized and hydrated during this unforgettable adventure.
                              </p>
                            </div>
                            <div className="p-highlight">
                              <h5>Inclusions:</h5>
                              <ul>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>
                                    {" "}
                                   
                                   Private Transfer to the captivating Liwa region





                                  </p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Thrilling Dune Drive in a private car

                                  
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Enjoy a delectable Lunch amidst Liwa Oasis
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Explore the beauty of Liwa Oasis

                                  
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Stay hydrated with Water and Soft Drinks

                                  
</p>
                                </li>
                                

                                

                                <p>
                                Join us on the Liwa Full Day Safari and immerse yourself in the serenity and splendor of the Liwa desert, where every moment is a testament to the timeless beauty and allure of the Arabian landscape. Experience the thrill of desert exploration, the warmth of Emirati hospitality, and the tranquility of nature on this truly memorable safari experience.

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
{/* 
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

export default LiwaFullDaySafari;
