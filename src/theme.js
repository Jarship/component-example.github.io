export const breakpoints = ['320px', '576px', '768px', '992px', '1200px'];

export const globalStyles = `
html,
body,
#root {
  min-width: ${breakpoints[0]};
  min-height: 100vh;
  border: 0;
  margin: 0;
  padding: 0;
  background: white;

  * {
    box-sizing: border-box;
  }
}

.slick-slider {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-hightlight-color: transparent;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-slide {
  display: block;
  border-radius: 5px;
  float: left;
  height: 100%;
  min-height: 1px;
}
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev {
  left: -25px;
}
.slick-next {
  right: -25px;
}
.slick-dots {
  position: absolute;
  bottom: -25px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  justify-content: center;
  display: flex;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots button {
  width: 0.1rem;
  height: 0.1rem;
  padding: 3px;
  border-radius: 100%;
  text-indent: -9999px;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  cursor: pointer;
  color: transparent;
  outline: none;
  background: transparent;  
  border: 1px solid #6f6f6f;
}
.slick-dots li.slick-active button {
  border: 1px solid #d95e16;
  background-color: #d95e16;
}

@media screen and (min-width: 1200px) {
  .slick-list {
    left: 0px;
  }
}
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}
`;

export default {
  breakpoints
};