import React from 'react';
import { ComponentTitle, LogoCarousel} from "./components";


const LogoItems = [
  {
    alignment: "center",
    name: "Mittens",
    description: "Mittens is a great kitten! Mittens loves to play with other kittens."
  },
  {
    alignment: "center",
    name: "Fluffy",
    description: "Fluffy is a great kitten! Fluffy works hard and plays hard!"
  },
  {
    alignment: "center",
    name: "Roscoe",
    description: "Roscoe is a great kitten! Roscoe likes to play fetch with his little ball."
  },
  {
    alignment: "center",
    name: "Avery",
    description: "Avery is a great kitten! Avery likes to give love nibbles, and then lots of kisses."
  }
]

function App() {
  return (
    <>
      <ComponentTitle bg="#f6f4f3">Light Kitten Carousel</ComponentTitle>
      <LogoCarousel background="Light" logoItems={LogoItems} />
      <ComponentTitle bg="#f6f4f3">Dark Kitten Carousel</ComponentTitle>
      <LogoCarousel background="Dark" logoItems={LogoItems} />
    </>
  );
}

export default App;
