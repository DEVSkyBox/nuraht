import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-bg-container">
      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
