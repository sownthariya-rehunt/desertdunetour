import React from 'react';
import './Gallery.css';

import img1 from '../../../assets/image_desert/1.png'
import img2 from '../../../assets/image_desert/2.png'
import img3 from '../../../assets/image_desert/3.png'
import img4 from '../../../assets/image_desert/4.png'
import img5 from '../../../assets/image_desert/5.png'
import img6 from '../../../assets/image_desert/6.png'

import img7 from '../../../assets/image_desert/7.png'
import img8 from '../../../assets/image_desert/AbuDhabiCityTour/3.png'
import img9 from '../../../assets/image_desert/AbuDhabiCityTour/5.png'
import img10 from '../../../assets/image_desert/Al Ain  Tour/4.png'
import img11 from '../../../assets/image_desert/Al Ain  Tour/6.png'
import img12 from '../../../assets/image_desert/Dubai Tour/3.png'
import img13 from '../../../assets/image_desert/Dubai Tour/4.png'
import img14 from '../../../assets/image_desert/Quad Bike Pictures.png'
import img15 from '../../../assets/image_desert/louvre abu dhabi.jpg'
import img16 from '../../../assets/image_desert/new_pic/Morning desert safari (1)/2.png'
import img17 from '../../../assets/image_desert/new_pic/Morning desert safari (1)/3.png'
import img18 from '../../../assets/image_desert/new_pic/Romantic dUNE Dinner/2.png'
import img19 from '../../../assets/image_desert/Dubai Tour/5.png'
import img20 from '../../../assets/image_desert/Dubai Tour/7.png'

const Gallery = () => {
    const figures = [
        { src: img1, caption: "Sunset Over the Dunes" },
        { src: img2, caption: "Camel Caravan" },
        { src: img3, caption: "Oasis in the Desert" },
        { src: img4, caption: "Golden Sands" },
        { src: img5, caption: "Starry Night in the Desert" },
        { src: img6, caption: "Desert Wildlife" },
        { src: img7, caption: "Dune Bashing Adventure" },
        { src: img8, caption: "Desert Camp" },
        { src: img9, caption: "Sandboarding Fun" },
        { src: img10, caption: "Traditional Bedouin Life" },
        { src: img11, caption: "Desert Sunrise" },
        { src: img12, caption: "Epic Desert Landscapes" },
        { src: img13, caption: "Mirage on the Horizon" },
        { src: img14, caption: "Solitude in the Sands" },
        { src: img15, caption: "Desert Safari" },
        { src: img16, caption: "Hidden Desert Oasis" },
        { src: img17, caption: "Wandering in the Desert" },
        { src: img18, caption: "Epic Dune Climb" },
        { src: img19, caption: "Cultural Desert Experience" },
        { src: img20, caption: "Endless Horizons" }
      ];
      

  return (
    <div className="figures-container">
    <div className='container card m-5'>
        <div className='row ms-5'>
        
        {figures.map((figure, index) => (
            <div className='col-lg-3 col-md-6 col-sm-12'>
        <figure key={index} className="wave-figure ms-auto me-auto text-center ">
      
          <img src={figure.src} alt={figure.caption} className="figure-img" />
          <figcaption className="figure-caption">{figure.caption}</figcaption>
        </figure>
        </div>
      ))}
       
        
        </div>
    </div>
      
    </div>
  );
};

export default Gallery;
