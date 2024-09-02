import React, { Component } from "react";
import {Link}               from "react-router-dom";
import $ from "jquery";

//Import Image
import secondLogo           from "../../assets/image_desert/Logo-01-01.png"
import paymentCard1Img      from "../../assets/images/payment/payment-card-1.png"
import paymentCard2Img      from "../../assets/images/payment/payment-card-2.png"
import paymentCard3Img      from "../../assets/images/payment/payment-card-3.png"
import paymentCard4Img      from "../../assets/images/payment/payment-card-4.png"
import paymentCard5Img      from "../../assets/images/payment/payment-card-5.png"

class Footers extends Component {
    //Inherited Parent options.
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //Init Js Scripts
    componentDidMount(){
        this.intiScripts();
    }

    intiScripts(){

        $(document).ready(function() {
            //  custom select input
            var x, i, j, l, ll, selElmnt, a, b, c;
            x = document.getElementsByClassName("custom-select");
            l = x.length;
            for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function(e) {
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML === this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function(e) {
                    /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }
            function closeAllSelect(elmnt) {
                var x, y, i, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                    if (elmnt === y[i]) {
                        arrNo.push(i)
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (i = 0; i < xl; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            document.addEventListener("click", closeAllSelect);

            // mobile menu
            $('.hamburger').on('click',function (event) {
                $(this).toggleClass('h-active');
                $('.main-nav').toggleClass('slidenav');
            });

            $('.header-home .main-nav ul li  a').on('click',function (event) {
                $('.hamburger').removeClass('h-active');
                $('.main-nav').removeClass('slidenav');
            });

            $(".main-nav .fl").on('click', function(event) {
                var $fl = $(this);
                $(this).parent().siblings().find('.sub-menu').slideUp();
                $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
                if($fl.hasClass('flaticon-plus')){
                    $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
                }else{
                    $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
                }
                $fl.next(".sub-menu").slideToggle();
            });


            //account dropdown
            var accountCard = document.querySelectorAll('.account-dropdown')
            var userIcon = document.querySelectorAll('.user-dropdown-icon i')

            userIcon.forEach((el)=>{
                el.addEventListener('click', ()=>{
                    accountCard.forEach((element)=>{
                        element.classList.toggle("activeCard")
                    })
                })
            });

            // Search Bar js
            var searchOpen = document.querySelectorAll('.searchbar-open i')
            var searchCard = document.querySelectorAll('.main-searchbar')
            var searchClose = document.querySelectorAll('.searchbar-close i')

            searchOpen.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.add('activeSearch')
                    })
                })
            })
            searchClose.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.remove('activeSearch')
                    })
                })
            });

            window.onclick = function(event){
                searchCard.forEach((el)=>{
                    if(event.target === el){
                        el.classList.remove('activeSearch')
                    }
                });
                if(!event.target.matches('.user-dropdown-icon i')){
                    accountCard.forEach((element)=>{
                        if(element.classList.contains('activeCard')){
                            element.classList.remove('activeCard')
                        }
                    })
                }
            };

            // sticky navabr js
            $(window).on('scroll',function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    $(".header-area").addClass("sticky");
                } else {
                    $(".header-area").removeClass("sticky");
                }
            });

            $(".preloader").delay(1000).fadeOut("slow");

        });

    }

    //Set data
    componentWillMount() {

    }
    //Un set data
    componentWillUnmount() {

    }
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* ===============  Newsletter area start =============== */}
                {/* <div className="newsletter-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="newsletter-wrapper">
                                    <h2>Subscribe To Our Newsletter
                                        For Latest Update</h2>
                                    <form>
                                        <div className="input-group newsletter-input">
                                            <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* ===============  Newsletter area end =============== */}

                {/* ==============  Footer area start================= */}
           {/* ==============  Footer area start================= */}
        <div className="footer-area ">
          <div className="container">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="footer-logo">
                  <img   loading="lazy"
                    src={secondLogo}
                    alt=""
                    className="img-fluid col-8"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="footer-info">
                  
                  <h5>Who We Are?</h5>
                  <p>
                    The main vision of this company is to provide our world
                    travellers’ an amazing, unique and memorable experience.
                    Bringing the Arabian traditions to your doorstep and placing
                    UAE on the world map as one of the best and safest countries
                    to visit remains our goal!
                  </p>
                  <div className="footer-social-icons">
                    <h5>Follow Us:</h5>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/desertdunetours">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.facebook.com/@DesertDuneTours"}>
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      
                      <li>
                        <a href={"https://wa.me/971586150070"}>
                          <i className="bx bxl-whatsapp" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-lg-6 col-md-5 col-sm-7">
                    <div className="footer-links">
                      <h5 className="widget-title">Contact us</h5>
                      <div className="contact-box">
                        <span>
                          <i className="bx bx-phone" />
                        </span>
                        <div>
                          <a href="tel:+971 25658820">+971 25658820</a>
                          <a href="tel:+971 586150070">+971 586150070</a>
                        </div>
                      </div>
                      <div className="contact-box">
                        <span>
                          <i className="bx bx-mail-send" />
                        </span>
                        <div>
                          <a href="mailto:info@example.com">info@desertdune.ae</a>
                          
                        </div>
                      </div>
                      <div className="contact-box">
                        <span>
                          <i className="bx bx-location-plus" />
                        </span>&nbsp;&nbsp;
                        <div className="text-white">
                          
                            3rd Floor, Al Jaber Jewellery Building,
                            Abu Dhabi,<br/> United Arab Emirates.
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-5">
                    <div className="footer-links">
                      <h5 className="widget-title">support</h5>
                      <div className="category-list">
                        <ul>
                          <li>
                          <Link
    to={"/contact"}
    onClick={this.scrollTop}
>
    Contact us
</Link>

                          </li>
                          <li>
                            <Link
                              to={"/about-us"}
                              onClick={this.scrollTop}
                            >
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/destination2"}
                              onClick={this.scrollTop}
                            >
                              Destinations
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to={/}
                              onClick={this.scrollTop}
                            >
                              our Blogs
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              to={"/"}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Package
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-4"> 
                    <div className="footer-links payment-links">
                      <h5 className="widget-title">We Accepts:</h5>
                      <div className="payment-cards">
                        <img   loading="lazy"
                          src={paymentCard2Img}
                          alt=""
                          className="img-fluid "
                          width={200}
                    height={200}
                        />
                        <img   loading="lazy"
                          src={paymentCard1Img}
                          alt=""
                          className="img-fluid col-8"
                          width={200}
                    height={200}
                        />
                        <img   loading="lazy"
                          src={paymentCard3Img}
                          alt=""
                          className="img-fluid col-8"
                          width={200}
                    height={200}
                        />
                        <img   loading="lazy"
                          src={paymentCard4Img}
                          alt=""
                          className="img-fluid col-8"
                          width={200}
                    height={200}
                        />
                        <img   loading="lazy"
                          src={paymentCard5Img}
                          alt=""
                          className="img-fluid col-8  "
                          width={200}
                    height={200}
                        />
                      </div>
                    </div> 
                   </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="copyrigth-area">
                  <p>
                    Copyright 2024 <Link to={"#"}>Desert Dune Tours</Link> | Design By{" "}
                    <Link to={'/'}>
                        @RaimsDigital
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==============  Footer area end================= */}
                {/* ==============  Footer area end================= */}
            </>
        );
    }
}

export default Footers;
