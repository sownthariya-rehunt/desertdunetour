import React from "react";
import destinations12Img from "../../assets/image_desert/1492x840-rides-min.jpg";
import destinations13Img from "../../assets/image_desert/3-slithersslides-card-720x480-updated.jpg"
import destinations14Img from "../../assets/image_desert/banner/2.jpg"
import destinations15Img from "../../assets/image_desert/EntertaimentTickets/Qasr.jpg"
import destinations16Img from "../../assets/image_desert/Warner-Bros-World-Abu-Dhabi-60-1024x768.jpg.jpg"

export const  EntertainmentPackage = () => {
  return (
    <div className="" >
      {/* ---------------------- */}
      <div className="container">
        <div className="row p-2 ">
          <li class="col-6">
            <a href="">
              <span>
                <div class="flex-center row ">
                  <div className="col-3 p-0">
                    <img   loading="lazy"
                      width="60"    height="60" className="rounded-circle"
                      src={destinations12Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                    <div class="txt-over-1">
                    Ferrari World
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
                  <div className="col-3 p-0">
                    <img   loading="lazy"
                      width="60"    height="60" className="rounded-circle"
                      src={destinations13Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                    <div class="txt-over-1">
                    yas water world
                    </div>

                    
                  </div>
                </div>
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
                <div class="flex-center row ">
                  <div className="col-3 p-0">
                    <img   loading="lazy"
                      width="60" 
                      height="60"
                      className="rounded-circle"
                      src={destinations14Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                  Louvre Abudhabi
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
                  <div className="col-3 p-0">
                    <img   loading="lazy"
                      width="60" height="60" className="rounded-circle"
                      src={destinations15Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                  Qasar Al Watan-
                    </div>
                  </div>
                </div>
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
                <div class="flex-center row ">
                  <div className="col-3 p-0">
                    <img   loading="lazy"
                      width="60" height="60" className="rounded-circle"
                      src={destinations16Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                  WB World Abudhabi
                    </div>
                  </div>
                </div>
              </span>
            </a>
          </li>
        
        </div>
      </div>
      {/* ------------------------------ */}
        
    </div>
  );
};

