import React, { Component } from "react";

import pd_thumb from "../../../assets/image_desert/new_pic/Half Day Desert Safari (1)/1.png";

import gallery1Img from "../../../assets/image_desert/Liwa Tour/1.png";
import gallery2Img from "../../../assets/image_desert/Liwa Tour/2.png";
import gallery4Img from "../../../assets/image_desert/Liwa Tour/3.png";
import gallery5Img from "../../../assets/image_desert/Liwa Tour/4.png";
import gallery6Img from "../../../assets/image_desert/Liwa Tour/5.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import galleryGxx1Img from "../../../assets/Liwa Tour/6.png";
// import galleryGxx2Img from "../../../assets/image_desert/new_pic/Half Day Desert Safari (1)/6.png";
import "../home/Slider_tab.css"
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
class LiwaFullDaySafari extends Component {
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
      {
        img: gallery4Img,
        title: "Camera",
      },
      {
        img: gallery5Img,
        title: "Coffee",
      },
      {
        img: gallery6Img,
        title: "Hats",
      },
      {
        img: galleryGxx1Img,
        title: "Honey",
      },
      // {
      //   img: galleryGxx2Img,
      //   title: "Basketball",
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
                      <h3> HALF DAY DESERT SAFARI</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Price: AED 305 per adult, AED 210 per child (minimum 2 pax)
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
                        <p>03:30 pm - 09:30 pm</p>
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
                                Embark on an extraordinary desert experience with our Half Day Desert Safari, a thrilling journey that promises to enchant all your senses. As the sun begins its descent, immerse yourself in the beauty and mystique of the desert landscape on this unforgettable adventure. The Half Day Desert Safari is designed to give you the perfect blend of excitement, culture, and relaxation, ensuring you make the most of your time in the desert. Feel the exhilaration of dune bashing as you glide over the sandy peaks, experiencing a rush like no other. Engage in the fun and adventure of sandboarding, a favorite activity for thrill-seekers. Visit a traditional camel farm and interact with these gentle creatures, gaining insight into their way of life. Delight in a leisurely camel ride, a peaceful way to explore the desert surroundings. Immerse yourself in the rich culture of the desert with traditional activities like henna painting, belly dancing, and Tanoura dance. Indulge in the flavors of Arabia with a sumptuous BBQ dinner under the starlit sky. Capture memories with a falcon and Arabic costume photoshoot. Complete your experience with a relaxing shisha session and stay refreshed with complimentary water and soft drinks throughout your journey.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Inclusions:</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                      {" "}
                                     
Enjoy the excitement of Sand Boarding

                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p> Visit a charming Camel Farm
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Embark on a Camel Riding adventure
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Engage in Henna Painting
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                    Be captivated by Belly Dance and Tanoura Dance performances

                                    </p>
                                  </li>

                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Relax with a Shisha session


                                      
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Indulge in a delectable BBQ Dinner

</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Experience the excitement of Dune Bashing
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>Capture memories with Falcon and Arabic Costume photoshoot
                                    
</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{" "}
                                    <p>
                                    Stay hydrated with Water and Soft Drinks
</p>
                                  </li>

                                  <p>
                                    {/* Embark on this enchanting Morning Desert
                                    Safari and let the desert unveil its secrets
                                    as you create unforgettable memories in the
                                    serene beauty of the dunes */}
                                  </p>
                                </ul>
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

                              <div className="p-rationg">
                                <h5>Rating</h5>
                                {/* <div className="rating-card">
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
                                </div> */}
                              </div>
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
