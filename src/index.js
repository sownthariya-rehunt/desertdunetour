import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from './components/app';
import defaultLayout from './components/layouts/main';
import secondLayout from './components/layouts/main-two';
import aboutUs from './components/pages/about-us/AboutUs';
import destinations from './components/pages/destinations/Destinations';
import packages from './components/pages/package/Packages';
import contact from './components/pages/contact/Contact';
import faq from './components/pages/faq/Faq';
import error from './components/pages/404/404';
import guide from './components/pages/guide/GuideComponent';
import gallary from './components/pages/gallary/GalleryComponent';
import packageSidebar from './components/pages/package/PackageSidebar';
import packageStandard from './components/pages/package/PackageStanderd';
import packageDetails from './components/pages/package/PackageDetails';
import blog from './components/pages/blog/BlogComponent';
import blogSidebar from './components/pages/blog/BlogSidebar';
import blogStandard from './components/pages/blog/BlogStandard';
import blogDetails from './components/pages/blog/BlogDetails';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import './index.scss';
import DaytripDetails from './components/pages/package/DaytripDetails';
import SunriseDesertDetails from './components/pages/package/SunriseDesertDetails';
import MorningDesertSafari from './components/pages/package/MorningDesertSafari';
import HalfDayDesertDetails from './components/pages/package/HalfDayDesertDetails';
import OVERNIGHTDESERTSAFARI from './components/pages/package/OVERNIGHTDESERTSAFARI';
import CamelTrekking from './components/pages/package/CamelTrekking';
import PrivateDuneDinner from './components/pages/package/PrivateDuneDinner';
import LiwaFullDaySafari from './components/pages/package/LiwaFullDaySafari';
import LiwaOvernightSafari from './components/pages/package/LiwaOvernightSafari';
import QuadBikeTour from './components/pages/package/QuadBikeTour';
import AbuDhabiCityTourHalfDay from './components/pages/package/AbuDhabiCityTourHalfDay';
import AbuDhabiModernCityTourFullDay from './components/pages/package/AbuDhabiModernCityTourFullDay';
import DubaiCityTour from './components/pages/package/DubaiCityTour';
import AlAinOasisTour from './components/pages/package/AlAinOasisTour';
import Scroll from './components/common/Scroll';
import ImageWithButton from './components/Package/ImageWithButton';
import DaytripPakage from './components/pages/home/DaytripPackage';
import TravallerchoicePackage from './components/pages/home/Travallerchoicepackage';
import FamilyfriendsPackage from './components/pages/home/FamilyfriednsPackage';
import EntertaimentPackage from './components/pages/home/EntertaimentPackage';
import FooddrinkPackage from './components/pages/home/Fooddrinkpackage';
import Destinations from './components/pages/home/Destinations';
import Scrolltop from './components/common/Scrolltop';
import Gallery from './components/pages/gallary/Gallery';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <SimpleReactLightbox>
          <Scrolltop>
            <Switch>
              <Route exact path="/" component={defaultLayout} />
              <Route path="/home-page-2" component={secondLayout} />
              <Layout>
                <Route path="/about-us" component={aboutUs} />
                <Route path="/destination" component={destinations} />
                <Route path="/package" component={packages} />
                <Route path="/package-sidebar" component={packageSidebar} />
                <Route path="/package-standard" component={packageStandard} />
                <Route path="/package-details" component={packageDetails} />
                <Route path="/faq" component={faq} />
                <Route path="/404" component={error} />
                <Route path="/guide" component={guide} />
                <Route path="/gallary" component={gallary} />
                <Route path="/blog" component={blog} />
                <Route path="/blog-sidebar" component={blogSidebar} />
                <Route path="/blog-standard" component={blogStandard} />
                <Route path="/blog-details" component={blogDetails} />
                <Route path="/contact" component={contact} />
                <Route path="/package1" component={SunriseDesertDetails} />
                <Route path="/package2" component={MorningDesertSafari} />
                <Route path="/package3" component={HalfDayDesertDetails} />
                <Route path="/package4" component={OVERNIGHTDESERTSAFARI} />
                <Route path="/package5" component={CamelTrekking} />
                <Route path="/package6" component={PrivateDuneDinner} />
                <Route path="/package7" component={LiwaFullDaySafari} />
                <Route path="/package8" component={LiwaOvernightSafari} />
                <Route path="/package9" component={QuadBikeTour} />
                <Route path="/package10" component={AbuDhabiCityTourHalfDay} />
                <Route path="/package11" component={AbuDhabiModernCityTourFullDay} />
                <Route path="/package12" component={DubaiCityTour} />
                <Route path="/package13" component={AlAinOasisTour} />
                <Route path="/daytrip" component={DaytripPakage} />
                <Route path="/Travellerpack" component={TravallerchoicePackage} />
                <Route path="/Friends" component={FamilyfriendsPackage} />
                <Route path="/Entertaiment" component={EntertaimentPackage} />
                <Route path="/Food" component={FooddrinkPackage} />
                <Route path="/destination2" component={Destinations} />
                <Route path="/Gallery1" component={Gallery} />
              </Layout>

            </Switch>
          </Scrolltop>
        </SimpleReactLightbox>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
