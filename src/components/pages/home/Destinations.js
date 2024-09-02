import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Images for desert
import destinations1Img from "../../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/1.png";
import destinations2Img from "../../../assets/image_desert/new_pic/Morning desert safari (1)/3.png";
import destinations3Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import destinations4Img from "../../../assets/image_desert/new_pic/Camel Trekking/1.png";
import destinations5Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
import destinations6Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png";
import package1Img from "../../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/1.png";
import package2Img from "../../../assets/image_desert/new_pic/Morning desert safari (1)/3.png";
import package3Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import package4Img from "../../../assets/image_desert/new_pic/Camel Trekking/1.png";
import package5Img from "../../../assets/image_desert/new_pic/Quad Biking/2.png";

// abu dhabi city tour
import destinations7Img from "../../../assets/image_desert/Dubai Tour/4.png";
import destinations8Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
import destinations9Img from "../../../assets/image_desert/Al Ain  Tour/2.png";
// import destinations9Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png";
import destinations10Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
import destinations11Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
// entertainment

import destinations12Img from "../../../assets/image_desert/1492x840-rides-min.jpg";
import destinations13Img from "../../../assets/image_desert/3-slithersslides-card-720x480-updated.jpg";
import destinations14Img from "../../../assets/image_desert/banner/2.jpg";
import destinations15Img from "../../../assets/image_desert/EntertaimentTickets/Qasr.jpg";
import destinations16Img from "../../../assets/image_desert/Warner-Bros-World-Abu-Dhabi-60-1024x768.jpg.jpg";
import "./Slider_tab.css";
class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplay: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
          loop: true,
        },
        600: {
          items: 2,
          nav: true,
          loop: true,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-105 ms-5 me-5 pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Package For Your Travel</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img
                    loading="lazy"
                    src={destinations1Img}
                    alt=""
                    className="img-fluid rounded-5 col-12"
                   
                  />
                  <div className="pakage-overlay rounded-5  rounded-5">
                    <strong>Desert Safari</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card border-0">
                    <div className="package-thumb">
                      <Link to={'/package10'}>
                        <img
                          loading="lazy"
                          src={destinations6Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className=" col-12 text-center">
                        <h3 className="text-center col-12">
                          {" "}
                         
                            Abu Dhabi Half City Tour{" "}
                          
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package10'}>
                          Adult: 305 AED <br /> Child: 210 AED
                        </Link>
                      </h3>
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>

                      {/* <div className="package-rating">
                          <strong>
                            <i className="bx bxs-star" />
                            <span>10K+</span> Rating
                          </strong>
                        </div> */}
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package2'}>
                        <img
                          loading="lazy"
                          src={destinations2Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                        <h3 className="text-center col-12">
                          Morning Desert Safari
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package2'}>
                          Adult: 263 AED <br /> Child: 210 AED
                        </Link>
                      </h3>
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>8K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package1'}>
                        <img
                          loading="lazy"
                          src={destinations3Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center ">
                        <h3 className=" text-center col-12">
                         Sunrise Desert Safari
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package1'}>
                          Adult: 263 AED <br /> Child: 210 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>8K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package5'}>
                        <img
                          loading="lazy"
                          src={destinations4Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                        <h3 className=" text-center col-12">
                          Camel Trekking
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package5'}>
                          Adult: 305 AED <br /> Child: 210 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>5K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-2"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package11'}>
                        <img
                          loading="lazy"
                          src={destinations6Img}
                          alt=""
                          className="img-fluid rounded-5 col-12 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                        <h3 className=" text-center col-12">
                          Abu Dhabi City tour
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package11'}>
                          Adult: 178 AED <br /> Child: 126 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>8K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package12'}>
                        <img
                          loading="lazy"
                          src={destinations7Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                        <h3>
                         Dubai City Tour
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package12'}>
                          Adult: 315 AED <br /> Child:210 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>8K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package10'}>
                        <img
                          loading="lazy"
                          src={destinations8Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className=" col-12 text-center">
                        <h3 className=" text-center col-12">
                          {" "}
                          Abu Dhabi Half City Tour 
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="" />
                        <Link to={'/package10'}>
                          adult: 305 AED <br /> child: 210 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <span>10K+</span> Rating
                        </strong>
                      </div> */}
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={'/package13'}>
                        <img
                          loading="lazy"
                          src={destinations9Img}
                          alt=""
                          className="img-fluid rounded-5 col-12"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                        <h3 className=" text-center col-12">
                          <span>Al Ain Oasis Tour </span>
                        </h3>
                      </div>
                      <h3 className="fs-6">
                        <i className="fl" />
                        <Link to={"/package13"}>
                          adult: 389 AED <br /> child: 315 AED
                        </Link>
                      </h3>{" "}
                      <a href="https://wa.me/971586150070" target="blank">
                        {" "}
                        <button className="button col-10">
                          <span>Book Now </span>
                        </button>{" "}
                      </a>
                      {/* <div className="package-rating">
                       <strong></strong>
                     </div> */}
                    </div>
                  </div>

                 
                </OwlCarousel>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img
                    loading="lazy"
                    src={destinations5Img}
                    alt=""
                    className="img-fluid rounded-5 col-12"
                  />
                  <div className="pakage-overlay rounded-5">
                    <strong >City Tours</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img
                    loading="lazy"
                    src={destinations12Img}
                    alt=""
                    className="img-fluid rounded-5 col-12"
                    
                  />
                  <div className="pakage-overlay rounded-5 text-center">
                    <strong >Entertainment Tickets</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
    
<div className="package-card">
  <div className="package-thumb">
    <a href={"https://www.ferrariworldabudhabi.com/"}>
      <img
        loading="lazy"
        src={destinations12Img}
        alt=""
        className="img-fluid rounded-5 col-12"
      />
    </a>
  </div>
  <div className="package-details">
    <div className="col-12 text-center">
      <h3>
        <i className="fl" />
        <a href={"https://www.ferrariworldabudhabi.com/"} className=" text-center col-12">
          {" "}
          Ferrari world
        </a>
      </h3>
    </div>
    <h5>
      <i className="flaticon-calendar" />1 Day
    </h5>
    <div className="package-rating">
      <strong></strong>
    </div>
  </div>
</div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <a
                        href={
                          "https://www.yaswaterworld.com/en/booking?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0-aPEC1lx5alrlxXhyal1-v1zgAO32-wVqU-b7QfHhSgnJuDNwmE8aAt91EALw_wcB&gclsrc=aw.ds#experiences"
                        }
                      >
                        <img
                          loading="lazy"
                          src={destinations13Img}
                          alt=""
                          className="img-fluid rounded-5 col-12 "
                          height={350}
                          width={350}
                        />
                      </a>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                      <h3>
                        <i className="fl" />
                        <a
                          href={
                            "https://www.yaswaterworld.com/en/booking?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0-aPEC1lx5alrlxXhyal1-v1zgAO32-wVqU-b7QfHhSgnJuDNwmE8aAt91EALw_wcB&gclsrc=aw.ds#experiences"
                          }
                          className=" text-center col-12" >
                          {" "}
                          Yas Water World
                        </a>
                      </h3>
                      </div>
                      <h5>
                          <i className="flaticon-calendar" />1 Day
                        </h5>
                   
                      <div className="package-rating">
                        <strong></strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <a href={"https://www.louvreabudhabi.ae/en/uae"}>
                        <img
                          loading="lazy"
                          src={destinations14Img}
                          alt=""
                          className="img-fluid rounded-5 col-12 "
                          height={350}
                          width={350}
                        />
                      </a>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                      <h3>
                        <i className="fl" />
                        <a href={"https://www.louvreabudhabi.ae/en/uae"} className=" text-center col-12">
                          {" "}
                          Louvre Abu Dhabi
                        </a>
                      </h3>
                      </div>
                      <h5>
                          <i className="flaticon-calendar" />1 Day
                        </h5>
                      
                      <div className="package-rating">
                        <strong></strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <a href={"https://www.qasralwatan.ae/"}>
                        <img
                          loading="lazy"
                          src={destinations15Img}
                          alt=""
                          className="img-fluid rounded-5 col-12 "
                          height={350}
                          width={350}
                        />
                      </a>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                      <h3>
                        <i className="fl" />
                        <a href={"https://www.qasralwatan.ae/"} className=" text-center col-12">
                          {" "}
                          Qasar Al Watan
                        </a>
                      </h3>
                      </div>
                      <h5>
                          <i className="flaticon-calendar" />1 Day
                        </h5>
                     
                      <div className="package-rating">
                        <strong></strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <a
                        href={`Https://Www.Wbworldabudhabi.Com/En/Tickets/Vip-Experience?Gad_Source=1&Gclid=Cj0KCQjwj9-Zbhdyarisaerjds2pekjvsisikvt5eldkcerg_G5luyord5jtikgxxfsam7131570qc8aarlwealw_Wcb&Gclsrc=Aw.Ds`}
                      >
                        <img
                          loading="lazy"
                          src={destinations16Img}
                          alt=""
                          className="img-fluid rounded-5 col-12 "
                          height={350}
                          width={350}
                        />
                      </a>
                    </div>
                    <div className="package-details">
                      <div className="col-12 text-center">
                      <h3>
                        <i className="fl" />
                        <a
                          href={`Https://Www.Wbworldabudhabi.Com/En/Tickets/Vip-Experience?Gad_Source=1&Gclid=Cj0KCQjwj9-Zbhdyarisaerjds2pekjvsisikvt5eldkcerg_G5luyord5jtikgxxfsam7131570qc8aarlwealw_Wcb&Gclsrc=Aw.Ds`}
                          className=" text-center col-12" >
                          Warner Brothers Park
                        </a>
                      </h3>
                      </div>
                      <h5>
                          <i className="flaticon-calendar" />1 Day
                        </h5>
                      
                      <div className="package-rating">
                        <strong></strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default Destinations;
