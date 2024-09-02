import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/image_desert/AbuDhabiCityTour/3.png"
import about2Img from "../../../assets/image_desert/SlideShowPictures/7.png"
import {Link} from "react-router-dom";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

  render() {
      const {isOpen } = this.state;
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img   loading="lazy" src={about1Img} alt="" className="img-fluid" width={400} height={400}/>
                               </div>
                               <div className="about-video">
                                   <img   loading="lazy" src={about2Img} alt="" className="img-fluid" width={400} height={400} />
                                   <i onClick={() => this.setState({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>About Desert Dune</h5>
                               <h2>The Best Tour Agency
                                   Company.</h2>
                               <p>"Desert Dune Tours has a dedicated team with local expertise and a passion for sharing the best of the UAE. Our mission is to offer world travelers an amazing and memorable experience. Desert Dune Activity : Desert Activity - Abu Dhabi Desert Safari & Dubai Desert Safari Camel Riding Dune Bashing Quad bike tour Belly Dance Show Tanoura Dance Show Henna Sandboarding dinner Photo with Falcon Abu Dhabi Safari Dubai Safari Abu Dhabi Sightseeing Sheikh Zayed Grand Mosque Louvre Museum Abu Dhabi Ferrari World Abu Dhabi Yas Waterworld Qasar Al Watan Emirates Palace Sea World Abu Dhabi Warner Bros Abu Dhabi Yas Bay The National Aquarium Abu Dhabi Hiretage village ( Museum ) Abu Dhabi Safari"</p>
                               {/* <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> Friendly Guides</li>
                                   <li><i className="flaticon-double-checking" /> Budget Friendly</li>
                                   <li><i className="flaticon-double-checking" /> Cost effective</li>
                                   <li><i className="flaticon-double-checking" /> time keeper</li>
                                 
                               </ul> */}
                               {/* <div className="about-wrapper-btn ">
                                   <Link to={"#"} className=" "><button className="  button"><span >Read More</span></button></Link>
                               </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
     
        <ModalVideo 
          channel='youtube' 
          autoplay 
          isOpen={this.state.isOpen} 
          videoId='rjmHWccSf2I' 
          onClose={() => this.setState({ isOpen: false })} 
        />
      </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }
}

export default AboutWrapper;
