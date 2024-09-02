import React from "react";
import package1Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/1.png";
// import package2Img from "../../../assets/image_desert/new_pic/Morning desert safari (1)/3.png";
import package2Img from "../../assets/image_desert/new_pic/Morning desert safari (1)/3.png";
import package3Img from "../../assets/image_desert/new_pic/Sunrise Desert Safari (1)/1.png";
import package4Img from "../../assets/image_desert/new_pic/Camel Trekking/1.png";
import package5Img from "../../assets/image_desert/new_pic/Quad Biking/2.png";
import package6Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/6.png"
import package7Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/7.png"
import package8Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Half Day Desert Safari/8.png"
import { Link } from "react-router-dom";
const DayPackage = () => {
  return (
    <div className="" >
      {/* ---------------------- */}
      <div className="container">
        <div className="row  ">
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package10`}>   
                <div class="flex-left row ">
                  <div className="col-4 p-0 m-0 ">
                  
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package1Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0 ">
                    <div class="txt-over-1 ">
                     	Abu Dhabi Half City Tour
                    </div>

                    
                  </div>
                </div></Link>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span>
              <Link to={`${process.env.PUBLIC_URL}/package2`}>
                <div class="flex-center row ">
                
                  <div className="col-4 p-0 m-0">
                 
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package2Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                   
                  </div>
                  <div className="col-8 p-0 m-0">
                    <div class="txt-over-1 ">
                    Morning Desert Safari
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
              <Link to={`${process.env.PUBLIC_URL}/package1`}>
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
                  Sunrise Desert Safari
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
              <Link to={`${process.env.PUBLIC_URL}/package5`}>
                <div class="flex-center row ">
              
                  <div className="col-4 p-0 m-0">
                 
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package4Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8 p-0 m-0">
                  <div class="txt-over-1">
                  Camel Trekking 
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
        <div className="row p-2">
       
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
       
    </div>
  );
};

export default DayPackage ;
