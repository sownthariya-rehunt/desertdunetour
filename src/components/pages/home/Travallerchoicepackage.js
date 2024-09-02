import React, { Component } from "react";
import { Link } from "react-router-dom";

//Load Image
import package1Img from "../../../assets/image_desert/new_pic/Half Day Desert Safari (1)/3.png";
import package2Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png";
import package3Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png";
import package4Img from "../../../assets/image_desert/DesertSafariPictures/4.png";
import package5Img from "../../../assets/image_desert/new_pic/Quad Biking/3.png";
import package6Img from "../../../assets/image_desert/DesertSafariPictures/6.png";
import MainBanner from "./MainBanner";
import Destinations from "./Destinations";

class TravallerchoicePackage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <MainBanner/>
        {/* ===============  Package  area start =============== */}
        
        <div className="package-area ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  {/* <h5>Day Trips</h5> */}
                  <h2>Traveller Choice</h2>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package3`}>
                      <img
                        loading="lazy"
                        src={package1Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>Half day desert safari</span>
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />: 03:30 pm - 09:30 pm
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package3`}>
                        AED: 305 adult,210 child{" "}
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package10`}>
                      <img
                        loading="lazy"
                        src={package2Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>Abu Dhabi City tour</span>
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />
                        09:00 am - 01:00 pm
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package10`}>
                        AED: 178.5adult,126 child{" "}
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package12`}>
                      <img
                        loading="lazy"
                        src={package3Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>Dubai City Tour</span>
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />
                        09:00 am - 07:00 pm
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package12`}>
                        AED: 315 adult,210 child{" "}
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package9`}>
                      <img
                        loading="lazy"
                        src={package5Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>Quad biking </span>{" "}
                      </h5>

                      <h6 className="col-6 ms-2">
                        <i className="flaticon-calendar" />{" "}
                        <span>08:00 am - 12:00 am</span>{" "}
                      </h6>
                    </div>
                    <h3>
                      <i className="" />
                      <Link to={`${process.env.PUBLIC_URL}/package9`}>
                        AED:578 adult,578 child
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row w-100">
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={"/package10"}>
                      <img
                        loading="lazy"
                        src={package1Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details p-0">
                    <div className="package-info col-12 ">
                      <h5 className="col-12 text-center pt-3 mt-1">
                        {" "}
                        <span className="fs-3 ">Abu Dhabi City tour </span>{" "}
                      </h5>
                      
                    </div>
                   <div className="container-fluid ">

  <div className="row">
  <h3 className="col-6">
                  
                  <Link to={"/package10"}>
                   adult : 178<span className="fs-6">AED  </span>
                  <br/>child : 126 <span className="fs-6">AED  </span>
                  </Link>                                               
                </h3>
                <h6 className="col-6 pt-3">
                    <i className="flaticon-calendar" />{" "}
                    <span> 09:00 am - 01:00 pm </span>{" "}
                  </h6>
  </div>

                   </div>
                   
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>10K+</span> Rating
                      </strong>
                    </div> */} 
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={"/package2"}>
                      <img
                        loading="lazy"
                        src={package3Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details p-0">
                    <div className="package-info col-12">
                      <h5  className="col-12 text-center pt-3 mt-1">
                        <span className="fs-3">Dubai City Tour</span>
                      </h5>
                      
                    </div>
                   <div className="container-fluid">
                    <div className="row">
                    <h3 className="col-6">
                      <i className="" />
                      <Link to={"/package2"}>
                      adult : 315 <span className="fs-6">AED  </span>
                  <br/>child : 210 <span className="fs-6">AED  </span>
                      </Link>
                    </h3>
                    <h6 className="col-6 pt-3">
                        <i className="flaticon-calendar" />{" "}
                        <span> 09:00 am - 07:00 pm </span>{" "}
                      </h6>
                    </div>
                   </div>
                    
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>
              </div>

             

               <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={"/package3"}>
                      <img
                        loading="lazy"
                        src={package1Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details p-0">
                    <div className="package-info col-12">
                      <h5 className="col-12 text-center pt-3 mt-1">
                        <span className="fs-3">Half day desert safari</span>
                      </h5>

                      
                    </div>
                    <div className="container-fluid">
                    <div className="row">
                    <h3 className="col-6">
                      <i className="" />
                      <Link to={"/package3"}>
                      adult : 305 <span className="fs-6">AED  </span>
                  <br/>child : 210 <span className="fs-6">AED  </span>
                      </Link>                                               
                    </h3>
                    <h6 className="col-6 pt-3">
                        <i className="flaticon-calendar" />{" "}
                        <span>03:30 pm - 9:30 pm</span>{" "}
                      </h6>
                    </div>
                   </div>

                    
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>5K+</span> Rating
                      </strong>
                    </div> */}
                 </div>
                </div>
              </div> 

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={"/package9"}>
                      <img
                        loading="lazy"
                        src={package5Img}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="package-details p-0">
                    <div className="package-info col-12 ">
                      <h5 className="col-12 text-center pt-3 mt-1">
                        <span className="fs-3">Quad biking </span>{" "}
                      </h5>

                      
                    </div>

                    <div className="container-fluid">
                    <div className="row">
                    <h3 className="col-6">
                      <i className="" />
                      <Link to={"/package9"}>
                      adult : 578 <span className="fs-6">AED  </span>
                  <br/>child : 578 <span className="fs-6">AED  </span>
                      </Link>
                    </h3>
                    <h6 className="col-6 pt-3">
                        <i className="flaticon-calendar" />{" "}
                        <span>08:00 am - 12:00 am</span>{" "}
                      </h6>
                    </div>
                   </div>
                   
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
        <Destinations/>
      <div className="text-center  banner-btn">
        <Link to= "/" > <button className="btn-common m-4">Back To Home</button></Link>
        </div>
      
      </>
    );
  }
}

export default TravallerchoicePackage;
