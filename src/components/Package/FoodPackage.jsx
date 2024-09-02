import React from "react";
import package1Img from "../../assets/image_desert/food/Buffet Dinner.jpeg"
import package2Img from "../../assets/image_desert/food/f4.jpg"
import package3Img from "../../assets/image_desert/food/img2.jpeg"
import package4Img from "../../assets/image_desert/food/img3.jpeg"
import package5Img from "../../assets/image_desert/food/img_1.jpg"
import package6Img from "../../assets/image_desert/food/ramadan.jpeg"
import package7Img from "../../assets/image_desert/food/uaetasting.jpeg"
const  FoodPackage = () => {
  return (
    <div className="" >
      {/* ---------------------- */}
      <div className="container">
        <div className="row p-2 ">
          <li class="col-6">
            <a href="">
              <span>
                <div class="flex-center row ">
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package1Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                    <div class="txt-over-1">
                     {/* content to show  */}
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
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package2Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                    <div class="txt-over-1">
                      {/* content to show  */}
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
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package3Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                     {/* content to show  */}
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
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package4Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                     {/* content to show  */}
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
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package5Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                      {/* content to show  */}
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
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package6Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                       {/* content to show  */}
                    </div>
                  </div>
                </div>
              </span>
            </a>
          </li>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="container">
        <div className="row p-2">
          
          <li class="col-6">
            <a href="">
              <span>
                <div class="flex-center row ">
                  <div className="col-3">
                    <img   loading="lazy"
                       width="60" height="60" className="rounded-circle"
                      src={package7Img}
                      alt="Desert Safari Abu Dhabi - Book Sunrise Desert Safari Abu Dhabi"
                    />
                  </div>
                  <div className="col-8">
                  <div class="txt-over-1">
                     {/* content to show  */}
                    </div>
                  </div>
                </div>
              </span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default FoodPackage ;
