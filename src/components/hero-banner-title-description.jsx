import React from 'react';

import HeroBanner from './hero-banner';
import ComponentTitle from './component-title';
import Text from './text';

const HeroBannerTitleDescription = props => {
  const { title, description } = props;
  return (
    <HeroBanner imgOrVid="Video" opacityLayerClass="manual-height" title={title} description={description}>
      <ComponentTitle color="white">
        {title}
      </ComponentTitle>
      {description ? (
        <Text color="white">
          {description}
        </Text>
      ) : null}
    </HeroBanner>

  );
}

export default HeroBannerTitleDescription;