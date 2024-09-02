import React, { Component } from "react";
import {Link} from "react-router-dom";
class AboutUs extends Component {
    componentDidMount(){
        this.scrollTop();
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
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Contact US</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="contact-wrapper pt-90">
                <div className="contact-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card h-75">
                                    <div className="contact-icon"><i className="flaticon-arrival" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Address</h5>
                                        <p>3rd Floor, Al Jaber Jewellery Building,<br/> 
                            Abu Dhabi,<br/> United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card h-75">
                                    <div className="contact-icon"><i className="flaticon-customer-service" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Email &amp; Phone</h5>
                                        <p>+971 586150070,<br></br>
                                        +971 25658820
                                        info@desertdune.ae</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card h-75">
                                    <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Social Media</h5>
                                        <ul className="contact-icons ">
                                            <li>
                                            <a href="https://www.instagram.com/desertdunetours">
                          <i className="bx bxl-instagram " />
                        </a>                                                </li>
                                            <li>
                                            <a href={"https://www.facebook.com/@DesertDuneTours"}>
                          <i className="bx bxl-facebook" />
                        </a>                                                </li>
                                            {/* <li>
                                                <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                                </li> */}
                                            <li>
                                            <a href={"https://wa.me/971586150070"}>
                          <i className="bx bxl-whatsapp" />
                        </a>                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-inputs pt-100">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-details">
                                    <h5 className="contact-d-head ">Get In Touch</h5>
                                    <p>
                    The main vision of this company is to provide our world
                    travellers’ an amazing, unique and memorable experience.
                    Bringing the Arabian traditions to your doorstep and placing
                    UAE on the world map as one of the best and safest countries
                    to visit remains our goal!
                  </p>
                  <div className="container">
                    <div className="row ms-auto me-auto">
                    <ul className="office-clock ">
                                       
                                        
                                    
<li className="col-6">

                                            <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Open Hour</h5>
                                                <p>Everyday  24/7</p>
                                            </div>
                                        
</li>
<li className="col-6">

                                            {/* <div className="clock-icon"><i className="flaticon-clock-1" /></div>
                                            <div className="clock-info">
                                                <h5>Friday Closed</h5>
                                                <p></p>
                                            </div> */}
                                
</li></ul>
                    </div>
                  </div>
                                   
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="contact-form">
                                    <form action="#" >
                                        <h5 className="contact-d-head">Contact Us</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Subject" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="Your Email" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Phone" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default AboutUs;
