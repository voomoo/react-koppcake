import { useEffect } from "react";
import Aos from "aos";
import cupcake from "../assets/cupcake.png";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="hero-section">
      <div
        data-aos="slide-down"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-out-back"
      >
        <img src={cupcake} alt="Cup Cake" />
      </div>
      <div className="hero-text" data-aos="slide-up">
        <h1>
          FORGET CUPCAKE <br />
          HAVE A KoppCake
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
