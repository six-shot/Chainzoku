// import logo from "./logo.svg";
// import "./App.css";
// import Hero from "./modules/home/sections/hero";
// import Holder from "./modules/home/sections/hero/holder";


// function App() {
//   return (
//     <div>
//       <Hero />
//      <Holder/>
//     </div>
//   );
// }


import React, { useState, useRef } from "react";
import "./App.css";
import image1 from "../src/assets/cursor/430233.webp";
import image2 from "../src/assets/cursor/49dca2.webp";
import image3 from "../src/assets/cursor/7f39bf.webp";
import image4 from "../src/assets/cursor/b111f5.png";
import image5 from "../src/assets/cursor/6273b6.png";
import image6 from "../src/assets/cursor/430233.webp";
import image7 from "../src/assets/cursor/a9b88d.webp";
import image8 from "../src/assets/cursor/be4198.webp";
import image9 from "../src/assets/cursor/f9943b.png";
import image10 from "../src/assets/cursor/fe55e8.webp";
import image11 from "../src/assets/cursor/sticker02.png";

function App() {
  const [images, setImages] = useState([]);
  const imageSources = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];
  const currentIndex = useRef(0); // Reference to keep track of the current index

  const handleClick = (event) => {
    // Get the current image based on the index
    const currentSrc = imageSources[currentIndex.current];

    // Create a new image object with a unique ID and the current image source
    const newImage = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
      src: currentSrc,
    };

    // Add the new image to the state
    setImages((prevImages) => [...prevImages, newImage]);

    // Remove the image after 7 seconds
    setTimeout(() => {
      setImages((prevImages) =>
        prevImages.filter((image) => image.id !== newImage.id)
      );
    }, 3000);

    // Update the index to point to the next image, looping back to 0 when reaching the end
    currentIndex.current = (currentIndex.current + 1) % imageSources.length;
  };

  return (
    <div className="App" onClick={handleClick}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="cursor"
          className="image-cursor w-[180px]"
          style={{
            position: "absolute",
            left: `${image.x - 100}px`, // Offset image so the circular motion is centered around the click
            top: `${image.y - 100}px`,
            pointerEvents: "none",
            animation: "spinEntry 0.5s ease-out forwards", // Fast spin on entry
          }}
        />
      ))}
    </div>
  );
}

export default App;

