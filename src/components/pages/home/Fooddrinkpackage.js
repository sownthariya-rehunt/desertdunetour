import React, { Component } from "react";
import {Link} from "react-router-dom";

//Load Image
import package1Img from "../../../assets/image_desert/food/Buffet Dinner.jpeg"
import package2Img from "../../../assets/image_desert/food/f4.jpg"
import package3Img from "../../../assets/image_desert/food/img2.jpeg"
import package4Img from "../../../assets/image_desert/food/img3.jpeg"
import package5Img from "../../../assets/image_desert/food/img_1.jpg"
import package6Img from "../../../assets/image_desert/food/ramadan.jpeg"
import package7Img from "../../../assets/image_desert/food/uaetasting.jpeg"
import MainBanner from "./MainBanner";
import Destinations from "./Destinations";

class FooddrinkPackage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
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
                   <h2>Food & Drink </h2>
                 </div>
               </div>
             </div>

             <div className="row">

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package1Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 180</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Paris Hill Tour
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package2Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 280</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Lake Garda, Italy
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package3Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 120</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Mount Dtna, Italyr
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package4Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 100</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Amalfi Costa, Italy
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package5Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 140</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     French Rivira, France
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package6Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 145</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Lake Geneva, France
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   
                       <img   loading="lazy" src={package7Img} alt="" className="img-fluid" />
                     
                   </div>
                   {/* <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 145</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                     Lake Geneva, France
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div> */}
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

export default FooddrinkPackage;
