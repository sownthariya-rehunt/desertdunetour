import React from "react";
import package1Img from "../../assets/image_desert/new_pic/Half Day Desert Safari (1)/3.png";
import package2Img from "../../assets/image_desert/AbuDhabiCityTour/4.png";
import package3Img from "../../assets/image_desert/AbuDhabiCityTour/5.png";
import package4Img from "../../assets/image_desert/DesertSafariPictures/4.png";
import package5Img from "../../assets/image_desert/new_pic/Quad Biking/3.png";
import package6Img from "../../assets/image_desert/DesertSafariPictures/6.png";
import { Link } from "react-router-dom";

const  TravallerPackage = () => {
  return (
    <div className="" >
      {/* ---------------------- */}
      <div className="container">
        <div className="row p-2 ">
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package3`}>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                 
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package1Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0">
                    <div class="txt-over-1">
                    Half day desert safari
                    </div>

                    
                  </div>
                </div>
                </Link>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package10`}>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package2Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0">
                    <div class="txt-over-1">
                    Abu Dhabi City tour
                    </div>

                    
                  </div>
                </div>
                </Link>
              </span>
            </a>
          </li>
        </div>
      </div>
      {/* ------------------------------ */}
        {/* ---------------------- */}
        <div className="container">
        <div className="row p-2 ">
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package12`}>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                 
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package3Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                    
                  </div>
                  <div className="col-8 p-0 m-0">
                  <div class="txt-over-1">
                  Dubai City Tour
                    </div>
                  </div>
                </div>
                </Link>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package9`}>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                  
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package5Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                   
                  </div>
                  <div className="col-8 p-0 m-0">
                  <div class="txt-over-1">
                  Quad biking
                    </div>
                  </div>
                </div>
                </Link>
              </span>
            </a>
          </li>
        </div>
      </div>
      {/* ------------------------------ */}
         {/* ---------------------- */}
         {/* <div className="container">
        <div className="row p-2">
          <li class="col-6">
            <a href="">
              <span>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package5Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0">
                  <div class="txt-over-1">
                  Quad biking
                    </div>
                  </div>
                </div>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span>
                <div class="flex-center row ">
                  <div className="col-4 p-0 m-0">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package6Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0">
                  <div class="txt-over-1">
                      Sunrise Desert Safari AED 1000
                    </div>
                  </div>
                </div>
              </span>
            </a>
          </li>
        </div>
      </div> */}
      {/* ------------------------------ */}
        
    </div>
  );
};

export default TravallerPackage ;
