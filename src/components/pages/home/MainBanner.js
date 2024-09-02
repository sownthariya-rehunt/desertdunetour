import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "../../../assets/css/slider.css";
import img1 from "../../../assets/image_desert/Abu/1.png";
import img2 from "../../../assets/image_desert/Abu/2.png";
import img3 from "../../../assets/image_desert/Abu/3.png";
import img4 from "../../../assets/image_desert/Abu/4.png";
import image2 from "../../../assets/image_desert/Abu/4.png";
import img5 from "../../../assets/image_desert/AbuDhabiCityTour/3.png";
import DaytripPakage from "./DaytripPackage";
import TravallerchoicePackage from "./Travallerchoicepackage";
import FamilyfriendsPackage from "./FamilyfriednsPackage";
import { Route, Switch, Router } from "react-router-dom";
import './Slider_tab.css';

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  changeDatepickerHandler = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    const mainBannerOptions = {
      items: 1,
      loop: true,
      margin: 0,
      smartSpeed: 700,
      dots: false,
      nav: false,
      autoplay: 2000,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
          dots: false,
        },
        600: {
          items: 1,
          nav: true,
          dots: false,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
        },
      },
    };

    const startDate = this.state.startDate;

    return (
      <>
        {/* ===============  Main banner area start =============== */}
        <div className="main-banner ">
          <div className="slider-item slider-item-4">
          
            <div className="container">
              <h2
                className="text-center"
                style={{
                  fontSize: "60px",
                  lineHeight: "1",
                  position: "relative",
                  top: 80,
                  textShadow: "-3px 3px 5px #B07D3B, -3px 5px 10px black, -3px 5px 10px #B07D3B, -3px 5px 10px white, -3px 5px 10px black",
                  color: "white",
                }}
              >
                We Guide, You Explore
              </h2>
              <div className="button1">
                <span className="button__icon-wrapper">
                  <svg
                    width="10"
                    className="button__icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>

                  <svg
                    className="button__icon-svg button__icon-svg--copy"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>
                </span>
                <a href="https://wa.me/971586150070">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-none">
          <div className="container-fluid">
            <OwlCarousel
              items={1}
              className="owl-theme"
              dots={false}
              loop
              nav
              margin={5}
              autoplay
              autoplayTimeout={4000}
              autoplayHoverPause
              height={400}
            >
              <div>
                <img className="img" src={img1} />
              </div>
              <div>
                <img className="img" src={img2} />
              </div>
              <div>
                <img className="img" src={img3} />
              </div>
              <div>
                <img className="img" src={img4} />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
