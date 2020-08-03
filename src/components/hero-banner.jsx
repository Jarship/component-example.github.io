import React, { useLayoutEffect, useState } from "react";

import grabImage from "../functions/grabImage";
import VideoRendered from './video-background';
import FullWidthContent from './full-width-content';
import BannerLayer from './banner-layer';
import Container from './container';

const FULL_TO_THEATER = 1920;

const HeroBanner = props => {
  const { children, imgOrVid, opacityLayerClass, opacityOverride = false } = props;

  let imgUrl;
  let isVideo;
  let vidWidth;
  let bannerHeightCount = 250;

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const windowMulitplier = size[0] > 992 ? 1 : size[0] > 576 && size[0] < 993 ? 1.2 : 2;
  
  if (props.title) bannerHeightCount += 75;
  if (props.subtitle) bannerHeightCount += 60;
  if (props.description) bannerHeightCount += (Math.ceil(props.description.length / 40) * 20);
  if (props.searchPlaceHolder) bannerHeightCount += 60;
  if (props.hasAccompanyingCards) bannerHeightCount += 200 / (windowMulitplier * 2);
  if (props.hasAccompanyingBioCard) bannerHeightCount += 200 / windowMulitplier;
  if (props.link) bannerHeightCount += 60;
  if (props.logos) bannerHeightCount += 200;

  if (imgOrVid === "Image") {
    isVideo = false;
    imgUrl = grabImage(size[0], size[0] / 2);
  } else if (imgOrVid === "Video") {
    isVideo = true;
    vidWidth = size[0] > FULL_TO_THEATER ? FULL_TO_THEATER : size[0];
  }

  return (
    <FullWidthContent backgroundImage={isVideo ? "" : `url("${imgUrl}")`} backgroundSize="cover">
      <BannerLayer
        bg={opacityOverride ? "" : "rgba(0, 0, 0, 0.6)"}
        width={1}
        zIndex={opacityOverride ? "" : 2}
        height={
          isVideo ? "" :
          opacityLayerClass === "given" && !isVideo
          ?
            [450, 450, 600]
          :
            opacityLayerClass === "manual-height"
            ? bannerHeightCount : ""}
        minHeight={isVideo ? 480 : ""}
        position="relative"
        >
          {isVideo && <VideoRendered width={vidWidth} />}
          <FullWidthContent display="flex" height="100%" position="absolute" zIndex={2} width={1} top={0} left={0} flexDirection="column" justifyContent="center">
            {children}
          </FullWidthContent>
      </BannerLayer>
    </FullWidthContent>
  );
};

export default HeroBanner;
