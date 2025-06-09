import React, { useEffect, useState } from "react";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";

const images = [Image1, Image2, Image3, Image4];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" ">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
        <div className="text-center space-y-2">
          <h2 className="text-white text-lg md:text-xl font-semibold tracking-wide">
            ಕರ್ನಾಟಕ ಸರ್ಕಾರ - ಕೃಷಿ ಇಲಾಖೆ
          </h2>
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Government of Karnataka - Department of Agriculture
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
