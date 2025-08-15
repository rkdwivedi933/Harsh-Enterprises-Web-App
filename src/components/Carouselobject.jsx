import React from "react";
import { Carousel } from "flowbite-react";

// Import your local images
import Car1 from "../assets/carousel.jpg";
import Car2 from "../assets/carousel2.jpeg";
import Car3 from "../assets/download.jpeg";

function Carouselobject() {
  return (
    <div className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80">
      <Carousel leftControl="‹" rightControl="›" slideInterval={3000}>
        <img src={Car1} alt="Slide 1" className="w-full h-full object-cover" />
        <img src={Car2} alt="Slide 2" className="w-full h-full object-cover" />
        <img src={Car3} alt="Slide 3" className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}

export default Carouselobject;
