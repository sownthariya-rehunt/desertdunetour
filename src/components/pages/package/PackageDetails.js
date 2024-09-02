import React, { Component } from "react";
import { Link } from "react-router-dom";

import pd_thumb from "../../../assets/images/package/pd-thumb.png"
import pr_1 from "../../../assets/images/package/pr-1.png"

import gallery1Img from "../../../assets/images/gallary/gl-1.png"
import gallery2Img from "../../../assets/images/gallary/gl-2.png"
import gallery4Img from "../../../assets/images/gallary/gl-4.png"
import gallery5Img from "../../../assets/images/gallary/gl-5.png"
import gallery6Img from "../../../assets/images/gallary/gl-6.png"

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png"
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png"
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png"

import gallery17Img from "../../../assets/images/gallary/gl-17.png"
import gallery16Img from "../../../assets/images/gallary/gl-16.png"
import gallery14Img from "../../../assets/images/gallary/gl-14.png"

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png"
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png"
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png"
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png"

import pm_sm_1 from "../../../assets/images/package/p-sm-1.png";
import pm_sm_4 from "../../../assets/images/package/p-sm-4.png";
import pm_sm_2 from "../../../assets/images/package/p-sm-2.png";
import pm_sm_3 from "../../../assets/images/package/p-sm-3.png";

//Import Images for desert 
import destinations1Img from "../../../assets/image_desert/DesertSafariPictures/1.png"
import destinations2Img from "../../../assets/image_desert/DesertSafariPictures/2.png"
import destinations3Img from "../../../assets/image_desert/DesertSafariPictures/3.png"
import destinations4Img from "../../../assets/image_desert/DesertSafariPictures/4.png"
import destinations5Img from "../../../assets/image_desert/DesertSafariPictures/5.png"
import destinations6Img from "../../../assets/image_desert/DesertSafariPictures/6.png"

// abu dhabi city tour
import destinations7Img from "../../../assets/image_desert/AbuDhabiCityTour/1.png";
import destinations8Img from "../../../assets/image_desert/AbuDhabiCityTour/2.png"
import destinations9Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png"
import destinations10Img from "../../../assets/image_desert/AbuDhabiCityTour/4.png"
import destinations11Img from "../../../assets/image_desert/AbuDhabiCityTour/5.png"
// entertainment 
import destinations12Img from "../../../assets/image_desert/EntertaimentTickets/ferrari.jpg";
import destinations13Img from "../../../assets/image_desert/EntertaimentTickets/yas.jpg"
import destinations14Img from "../../../assets/image_desert/EntertaimentTickets/louvre.jpg"
import destinations15Img from "../../../assets/image_desert/EntertaimentTickets/Qasr.jpg"
import destinations16Img from "../../../assets/image_desert/EntertaimentTickets/parque.jpg"
import organizer from "../../../assets/images/organizer.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DaytripDetails from "./DaytripDetails";
import AbudhabiDetails from "./AbuDhabiDetails";

import FoodBasedDetails from "./FoodBasedDetails";
import SunriseDesertDetails from "./SunriseDesertDetails";
import MorningDesertSafari from "./MorningDesertSafari";
import HalfDayDesertSafari from "./HalfDayDesertDetails";
import CamelTrekking from "./CamelTrekking";

class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
    }
    changeDatepickerHandeller = (date) => {
        this.setState({ startDate: date });
    }

    componentDidMount() {
        this.scrollTop();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const startDate = this.state.startDate;

        return (
            <>
            {/* ===============  breadcrumb area start =============== */}
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
            {/* ===============  breadcrumb area end =============== */}
            {/* <SunriseDesertDetails/> */}
            {/* <MorningDesertSafari/> */}
            {/* <HalfDayDesertSafari/> */}
            {/* <CamelTrekking/> */}
    {/* <DaytripDetails/>
    <AbudhabiDetails/>
    <MorningtripDetails/>
    <FoodBasedDetails/> */}
        </>
        );
    }
}

export default PackageDetails;
