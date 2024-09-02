import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faCar,
  faCompass,
  faConciergeBell,
  faHandshake,
  faMapSigns,
  faTaxi,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import './Slider_tab.css';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* =============== achievement area start =============== */}
        <div className="achievement-area p-80 mt-120">
          <div className="container p-5">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="section-head pb-30"
                  data-wow-duration="500ms"
                  data-wow-delay="0ms"
                >
                  <h5>Discover the Benefits of Traveling with Desert Dune</h5>
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-xl-3 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="achievement-card h-100 p-sm-4">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faCar} className="fontst" />
                  </div>
                  <h5>Safaris </h5>
                </div>
              </div>

              <div
                className="col-lg-3 col-xl-3 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="achievement-card h-100">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faMapSigns} className="fontst" />
                  </div>
                  <h5>Tour Packages </h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-xl-3 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="achievement-card  h-100">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faBus} className="fontst" />
                  </div>
                  <h5>Transportation</h5>
                </div>
              </div>
              {/* <div
                className="col-lg-4 col-xl-2 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              > */}
                {/* <div className="achievement-card   h-100">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faTicket} className="fontst" />
                  </div>
                  <h5>Ticket Booking</h5>
                </div> */}
              {/* </div>
              <div
                className="col-lg-4 col-xl-2 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              > */}
                {/* <div className="achievement-card  h-100">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faHandshake} className="fontst" />
                  </div>
                  <h5 className="col-12">Meetings Arrangements</h5>
                </div> */}
              {/* </div> */}
              <div
                className="  col-lg-3 col-xl-3 col-md-6 col-sm-6 mt-30 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="achievement-card  h-100">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={faConciergeBell} className="fontst" />
                  </div>
                  <h5>Concierge Service</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== achievement area end =============== */}
      </>
    );
  }
}

export default Service;
