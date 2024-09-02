import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="bg-video">
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;