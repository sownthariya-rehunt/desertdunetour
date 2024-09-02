import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

//Import Images
import features1Img from "../../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/2.png";
import features2Img from "../../../assets/image_desert/new_pic/Half Day Desert Safari (1)/5.png";
import features3Img from "../../../assets/image_desert/new_pic/Quad Biking/2.png";
import features4Img from "../../../assets/image_desert/new_pic/Camel Trekking/3.png";
class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const featuresOptions = {
      items: 2,
      loop: true,
      margin: 30,
      smartSpeed: 1500,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
        },
        1000: {
          items: 2,
          dots: false,
          nav: false,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* ===============  Feature area start =============== */}
        <div className="feature-area mt-120 p-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-60">
                  <h3 className="text-white">Feature Tours</h3>
                  <h2>See Our Best Popular Destinations</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <OwlCarousel
                  className="feature-slider owl-carousel"
                  {...featuresOptions}
                >
                  <div className="feature-card">
                    <div className="feature-img col-6 rounded-start">
                      <img
                        loading="lazy"
                        src={features1Img}
                        alt=""
                        className="img-fluid "
                      />
                    </div>
                    <div className="feature-content col-6 rounded-end">
                      <Link
                        to={"/package-details"}
                        className="title"
                      >
                        Group Travel Go To Dubai City Tour
                      </Link>
                      <h5>
                        {/* <i className="bx bxs-star" /><span> 7K+</span>Rating */}
                      </h5>
                      <strong>
                        AED 250 <span> AED 300</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img col-6 rounded-start">
                      <img
                        loading="lazy"
                        src={features2Img}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content col-6 rounded-end">
                      <Link
                        to={"/package-details"}
                        className="title"
                      >
                        Group Travel Abu Dhabi City Tour
                      </Link>
                      <h5>
                        {/* <i className="bx bxs-star" /><span> 7K+</span>Rating */}
                      </h5>{" "}
                      <strong>
                        AED 250 <span> AED 300</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img col-6 rounded-start">
                      <img
                        loading="lazy"
                        src={features4Img}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content col-6 rounded-end">
                      <Link
                        to={"/package-details"}
                        className="title"
                      >
                        Al Ain Oasis Tour{" "}
                      </Link>
                      <h5>
                        {/* <i className="bx bxs-star" /><span> 7K+</span>Rating */}
                      </h5>{" "}
                      <strong>
                        AED 250 <span> AED 300</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img col-6 rounded-start">
                      <img
                        loading="lazy"
                        src={features3Img}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content col-6 rounded-end">
                      <Link
                        to={"/package-details"}
                        className="title"
                      >
                        Quad Biking
                      </Link>
                      <h5>
                        {/* <i className="bx bxs-star" /><span> 7K+</span>Rating */}
                      </h5>
                      <strong>
                        AED 250 <span> AED 300</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img col-6 rounded-start">
                      <img
                        loading="lazy"
                        src={features1Img}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content col-6 rounded-end">
                      <Link
                        to={"/package-details"}
                        className="title"
                      >
                        - Camel Trekking{" "}
                      </Link>
                      <h5>
                        {/* <i className="bx bxs-star" /><span> 7K+</span>Rating */}
                      </h5>{" "}
                      <strong>
                        AED 250 <span> AED 300</span>
                      </strong>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Feature area start =============== */}
      </>
    );
  }
}

export default Features;
