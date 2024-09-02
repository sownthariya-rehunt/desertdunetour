import React, { Component } from "react";
import {Link} from "react-router-dom";

//Load Image
import destinations12Img from "../../../assets/image_desert/1492x840-rides-min.jpg";
import destinations13Img from "../../../assets/image_desert/3-slithersslides-card-720x480-updated.jpg"
import destinations14Img from "../../../assets/image_desert/banner/2.jpg"
import destinations15Img from "../../../assets/image_desert/EntertaimentTickets/Qasr.jpg"
import destinations16Img from "../../../assets/image_desert/Warner-Bros-World-Abu-Dhabi-60-1024x768.jpg.jpg"
import MainBanner from "./MainBanner";
import Destinations from "./Destinations";

class EntertaimentPackage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
       <>
         {/* ===============  Package  area start
          Ferrari world
Yas Water World
Louvre Abu Dhabi
Qasar Al Watan
Warner Brothers Park=============== */}

<MainBanner/>
         <div className="package-area ">
           <div className="container-fluid">

             <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                 <div className="section-head pb-45">
                   {/* <h5>Day Trips</h5> */}
                   <h2>Entertaiment Tickets</h2>
                 </div>
               </div>
             </div>

             <div className="row">

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   <a href={"https://www.ferrariworldabudhabi.com/"}> 
                       <img   loading="lazy" src={destinations12Img} alt="" className="img-fluid" />
                     </a>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       {/* <h5><span>	Ferrari World  </span></h5> */}
                       <h5><i className="flaticon-calendar" />1 Day</h5>
                     </div>
                     <h3 className="text-center">
                       <i className="flaticon-arrival" />
                       <a href={"https://www.ferrariworldabudhabi.com/"}>   Ferrari world</a>
                     </h3>
                     
                   </div>
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   <a href={"https://www.yaswaterworld.com/en/booking?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0-aPEC1lx5alrlxXhyal1-v1zgAO32-wVqU-b7QfHhSgnJuDNwmE8aAt91EALw_wcB&gclsrc=aw.ds#experiences"}> 
                       <img   loading="lazy" src={destinations13Img} alt="" className="img-fluid" />
                     </a>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       {/* <h5><span>yas water world</span></h5> */}
                       <h5><i className="flaticon-calendar" />1 Day</h5>
                     </div>
                     <h3 className="text-center">
                       <i className="flaticon-arrival" />
                       <a href={"https://www.yaswaterworld.com/en/booking?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0-aPEC1lx5alrlxXhyal1-v1zgAO32-wVqU-b7QfHhSgnJuDNwmE8aAt91EALw_wcB&gclsrc=aw.ds#experiences"}> Yas Water World</a>
                     </h3>
                     
                   </div>
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   <a href={"https://www.louvreabudhabi.ae/en/uae"}> 
                       <img   loading="lazy" src={destinations14Img} alt="" className="img-fluid" />
                     </a>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       {/* <h5><span>louvreabudhabi</span></h5> */}
                       <h5><i className="flaticon-calendar" />1 Day</h5>
                     </div>
                     <h3 className="text-center">
                       <i className="flaticon-arrival" />
                       <a href={"https://www.louvreabudhabi.ae/en/uae"}> Louvre Abu Dhabi</a>
                     </h3>
                    
                   </div>
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                 <div className="package-card">
                   <div className="package-thumb">    <a href={"https://www.qasralwatan.ae/"}> 
                       <img   loading="lazy" src={destinations15Img} alt="" className="img-fluid" />
                     </a>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       {/* <h5><span>AED 100</span>/Per Person</h5> */}
                       <h5><i className="flaticon-calendar" />1 Day</h5>
                     </div>
                     <h3 className="text-center">
                       <i className="flaticon-arrival" />
                       <a href={"https://www.qasralwatan.ae/"}> Qasar Al Watan</a>
                     </h3>
                     
                   </div>
                 </div>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                   <a href={" https://www.wbworldabudhabi.com/en/tickets/vip-experience?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds2pekJvsIsIkVT5ELDkcErG_g5LUyoRd5JTIKgXXFsaM7131570qc8aArlwEALw_wcB&gclsrc=aw.ds"}> 
                       <img   loading="lazy" src={destinations16Img} alt="" className="img-fluid" />
                     </a>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       {/* <h5><span>AED 140</span>/Per Person</h5> */}
                       <h5><i className="flaticon-calendar" />1 Day</h5>
                     </div>
                     <h3 className="text-center"> 
                       <i className="flaticon-arrival" />
                       <a href={" https://www.wbworldabudhabi.com/en/tickets/vip-experience?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds2pekJvsIsIkVT5ELDkcErG_g5LUyoRd5JTIKgXXFsaM7131570qc8aArlwEALw_wcB&gclsrc=aw.ds"}> Warner Brothers Park</a>
                     </h3>
                     
                   </div>
                 </div>
               </div>
{/* 
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={/package-details}>
                       <img   loading="lazy" src={package6Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>AED 145</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={/package-details}>Lake Geneva, France</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div> */}

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

export default EntertaimentPackage;
