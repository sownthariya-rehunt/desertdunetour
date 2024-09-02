import React from "react";
import package1Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Morning Desert Safari/1.png"
import package2Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Morning Desert Safari/2.png"
import package3Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Morning Desert Safari/3.png"
import package4Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Morning Desert Safari/1.png"
import package5Img from "../../assets/image_desert/wetransfer_half-day-desert-safari-zip_2024-06-11_1301/Morning Desert Safari/2.png"
import package6Img from "../../assets/image_desert/louvre abu dhabi.jpg"
import { Link } from "react-router-dom";
const  FamilyPackage = () => {
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
                </div></Link>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span> <Link to={`${process.env.PUBLIC_URL}/package11`}>
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
                </div></Link>
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
              <span> <Link to={`${process.env.PUBLIC_URL}/package12`}>
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
                </div></Link>
              </span>
            </a>
          </li>
          <li class="col-6">
            <a href="">
              <span><Link to={`${process.env.PUBLIC_URL}/package13`}>
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
                  Al Ain Oasis Tour 
                    </div>
                  </div>
                </div></Link>
              </span>
            </a>
          </li>
        </div>
      </div>
      {/* ------------------------------ */}
      
      {/* ------------------------------ */}
        
    </div>
  );
};

export default FamilyPackage ;
