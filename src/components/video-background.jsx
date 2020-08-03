import React from 'react';

const OGV_URL = "https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.ogv";
const MP4_URL = "https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.mp4";
const WEBM_URL = "https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.webm";

const VideoBackground = props => {
  const { width } = props;
  let vidWidth, vidHeight;
  if (width < 427) {
    vidWidth = 427;
    vidHeight = 240;
  } else if (width <= 854) {
    vidWidth = 854;
    vidHeight = 480;
  } else if (width < 1280) {
    vidWidth = 1280;
    vidHeight = 720;
  } else {
    vidWidth = 1920;
    vidHeight = 1080;
  }
  return (
<div className="extra-large-container">
      <style jsx>
        {`
          .extra-large-container {
            width: 100%;
            background-color: #25282A;
          }
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 1920px;
            max-height: ${480}px;
            overflow: hidden;671
          }
          video {
            object-fit: cover;
          }
        `}
      </style>
      <div className="wrapper mx-xl-auto">
        {/* playsInline supports ios safari */}
        <video autoPlay loop muted playsInline preload="auto" width={vidWidth} height={vidHeight < 480 ? 480 : vidHeight}>
          <source src={OGV_URL} type="video/ogv" />
          <source src={WEBM_URL} type="video/webm" />
          <source src={MP4_URL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
