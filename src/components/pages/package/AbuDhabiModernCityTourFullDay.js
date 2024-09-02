import React, { Component } from "react";

import pd_thumb from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import "../home/Slider_tab.css"
import gallery1Img from "../../../assets/image_desert/AbuDhabiCityTour/2.png";
import gallery2Img from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import gallery4Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png";
import gallery5Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
import gallery6Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";  
// import galleryGxx1Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
// import galleryGxx2Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/2.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import SellIcon from '@mui/icons-material/Sell';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
class AbuDhabiModernCityTourFullDay extends Component {
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
        img: gallery6Img,
        title: "Dune Bashing",
      },
      {
        img: gallery4Img,
        title: "Sand Boarding",
      },
      {
        img: gallery2Img,
        title: "Camel Farm",
      },
      {
        img: gallery1Img,
        title: "Henna Painting",
      },
      {
        img: gallery5Img,
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
                    <h3>  ABU DHABI MODERN CITY TOUR FULL DAY</h3>

                    <strong>
                        {/* <i className="flaticon-arrival" /> */}
                        <i> <b> Price <SellIcon/> - Adult : <span className="text-dark" >AED  378 ,</span> Child:  <span className="text-dark" >AED 210</span> (minimum 2
                        pax)</b></i>
                        </strong>
                    {/* <strong>
                      <i className="flaticon-arrival" />
                      Price: AED 378 per adult, AED 210 per child (minimum 2 pax)

                    </strong> */}
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
                      <p> 09:00 am - 06:00 pm

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
                              Embark on a full-day exploration of Abu Dhabi's modern wonders with our Abu Dhabi Modern City Tour Full Day. This immersive journey is a gateway to the dynamic and contemporary side of the capital, offering a kaleidoscope of experiences that blend tradition with innovation. From the iconic domes of the Grand Mosque to the cultural tapestries of the Heritage Village, this tour immerses you in the diverse narratives that shape Abu Dhabi's vibrant identity. Dive into the bustling Fishing Harbour, where the sights and sounds of maritime life come alive against the backdrop of the glistening waters. Explore the entertainment mecca of Yas Island and the cultural oasis of Saadiyat Island, both testaments to Abu Dhabi's vision for the future. Unleash your senses at the Central Souq, a bustling marketplace filled with treasures waiting to be discovered. Relax at Al Hudayriat Beach, where golden sands and azure waters provide a serene escape from the city buzz. Marvel at the architectural masterpiece of the Louvre Museum (or Qasar Al Watan on Mondays), a beacon of art and culture that captivates with its beauty. Optional lunch stops offer a culinary journey through the diverse flavors of Abu Dhabi, adding a delicious twist to your exploration of the city.
                              </p>
                            </div>
                            {/* <div className="p-highlight">
                              <h5>Inclusions:</h5>
                              <ul>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>
                                    {" "}                                   
                                    Visit the iconic Sheikh Zayed Grand Mosque



                                  </p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Explore the cultural Heritage Village


                                 
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Drive past Yas Island and Saadiyat Island

                                    </p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Experience the vibrant Dates Market

                                    </p>

                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Enjoy the scenic views of the Corniche
                                    </p>

                                </li>
                              
                              
                              

                                <p>
                                Join us on the Abu Dhabi City Tour Half Day and immerse yourself in the diverse tapestry of Abu Dhabi's landmarks, from ancient traditions to modern marvels. This tour is designed to offer a snapshot of the city's essence, providing you with a deeper understanding and appreciation of the dynamic capital of the UAE.


</p>
                              </ul>
                            </div> */}
                            <div className="p-highlight">
                              <h5>
Inclusions
</h5>
                              <ul>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Visit the majestic Grand Mosque</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>
Explore the Heritage Village
</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Discover the vibrant Fishing Harbour</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Experience the excitement of Yas Island</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Immerse in culture at Saadiyat Island</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Shop at the Central Souq </p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Relax at Al Hudayriat Beach</p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Marvel at the Louvre Museum (or Qasar Al Watan on Mondays) </p>
                                </li>
                                <li>
                                  <i className="bx bx-circle" />{" "}
                                  <p>Optional lunch stop for a culinary delight </p>
                                </li>
                                <p>
                                Embark on the Abu Dhabi Modern City Tour Full Day and witness the city's modern evolution unfold before your eyes. From architectural marvels to cultural highlights, this tour is a celebration of Abu Dhabi's essence, offering you a comprehensive look at the capital's past, present, and future. Join us for a day filled with discovery, adventure, and unforgettable experiences in the modern heart of Abu Dhabi.
                                </p>
                              </ul>
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

export default AbuDhabiModernCityTourFullDay;
