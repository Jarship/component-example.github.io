import React from "react";
import styled from "@emotion/styled";

import grabImage from "../functions/grabImage";
import Slider from 'react-slick';
import Card from './card';
import Text from './text';
import FullWidthContent from './full-width-content';
import Container from './container';
import Image from './image';

const Slide = ({ item: { alignment, name, description }, background }) => {
  const image = grabImage(400 + Math.floor((Math.random() * 10)), 200 + Math.floor((Math.random() * 10)));
  return (
    <Card px="15px" backgroundColor={background === "Light" ? "white" : "#25282A"}>
      <Image src={image} alt={name + " the kitten"} />
      <Text textAlign={alignment} color={background === "Light" ? "#25282A" : "white"}>{description}</Text>
    </Card>
  );

}

const SliderFreeContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
@media screen and (min-width: 920px) {
  flex-direction: row;
}
`;

const LogoCarousel = props => {
  const { background, logoItems } = props;
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <img src={`/component-example/icons/chevron-right-${background === "Light" ? "dark" : "light"}.svg`} alt="next-kitten" />,
    prevArrow: <img src={`/component-example/icons/chevron-left-${background === "Light" ? "dark" : "light"}.svg`} alt="prev-kitten" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };
  return (
    <FullWidthContent p="4rem 2rem" bg={background === "Light" ? "white" : "#25282A"}>
      <Container bg={background === "Light" ? "white" : "#25282A"}>
        {logoItems && Array.isArray(logoItems) && logoItems.length > 3 ? (
            <Slider {...settings}>
              {logoItems.map((item, idx) => (
                  <Slide item={item} key={`Kitten-slide-${idx}`} background={background} />
              ))}
            </Slider>
          ) : logoItems && Array.isArray(logoItems) && (
            <SliderFreeContainer>
              {logoItems.map((item, idx) => (
                <Slide key={`Kitten-${idx}`} item={item} background={background} />
              ))}
            </SliderFreeContainer>
          )}
      </Container>
    </FullWidthContent>
  );
};

export default LogoCarousel;
