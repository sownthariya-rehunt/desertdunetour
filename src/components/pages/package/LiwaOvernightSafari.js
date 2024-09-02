import React, { Component } from "react";

import pd_thumb from "../../../assets/image_desert/new_pic/Liwa Overnight/1.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1Img from "../../../assets/image_desert/new_pic/Liwa Overnight/2.png";
import gallery2Img from "../../../assets/image_desert/new_pic/Liwa Overnight/1.png";
import gallery4Img from "../../../assets/image_desert/new_pic/Liwa Overnight/3.png";
import gallery5Img from "../../../assets/image_desert/new_pic/Liwa Overnight/4.png";
import gallery6Img from "../../../assets/image_desert/new_pic/Liwa Overnight/5.png";

import SellIcon from '@mui/icons-material/Sell';
// import galleryGxx1Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
// import galleryGxx2Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/2.png";
import "../home/Slider_tab.css"
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

class LiwaOverNightSafari extends Component {
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
                    <h3>  LIWA OVERNIGHT SAFARI</h3>
                    
                    <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED 2310</span>  <span className="text-dark" ></span> per private car </b></i>
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
                      <p>01:30 pm (Day-1) - 12:00 pm (Day-2)
</p>
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
                              Immerse yourself in the enchanting beauty of the Liwa desert with our Liwa Overnight Safari, a magical journey that promises an unforgettable experience under the star-studded Arabian sky. Escape the confines of the city and venture into the vast expanse of Liwa, a desert paradise that captivates with its golden dunes and serene oasis. The Liwa Overnight Safari offers a unique opportunity to delve deep into the heart of the desert, where every moment is a symphony of tranquility and adventure. Your journey begins in the early afternoon as you embark on a private transfer to Liwa, where the majestic dunes and boundless horizon await. Feel the thrill of a dune drive in a private car, navigating the sandy terrain with expert guidance. Discover the lush beauty of Liwa Oasis, a verdant gem in the desert that provides a serene backdrop for your overnight adventure. As the sun sets, indulge in a sumptuous BBQ dinner under the starlit sky, followed by a night spent in traditional tents with cozy sleeping bags. Wake up to the breathtaking Desert Sunrise, a spectacle that will etch itself into your memory forever. Enjoy a delightful breakfast amidst the tranquil desert surroundings before bidding farewell to this oasis of serenity.
                              </p>
                            </div>
                            <div className="p-highlight">
                              <h5>Inclusions:</h5>
                              <ul>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>
                                    {" "}
                                   
                                    Private Transfer to the picturesque Liwa region






                                  </p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Thrilling Dune Drive in a private car

                                  
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Explore the beauty of Liwa Oasis
                                    </p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Indulge in a delectable BBQ Dinner

</p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Overnight stay in Tents with Sleeping Bag

</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Witness the mesmerizing Desert Sunrise

</p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p> Breakfast in the desert tranquility


</p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Stay hydrated with Water and Soft Drinks

</p>

                                </li>
                                

                                

                                <p>
                                Embark on this Liwa Overnight Safari and immerse yourself in the peace and grandeur of the desert as you spend a night under the starry sky, surrounded by the beauty of nature. Let the tranquil ambiance and warm hospitality of the desert envelop you, creating memories that will stay with you long after you leave the sandy dunes of Liwa.

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

export default LiwaOverNightSafari;
