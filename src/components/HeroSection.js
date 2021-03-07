import { useEffect } from "react";
import Aos from "aos";
import cupcake from "../assets/cupcake.png";
import cupcake2 from "../assets/cupcake2.png";
import cupcake3 from "../assets/cupcake3.png";
import cupcake4 from "../assets/cupcake4.png";
import cakebg from "../assets/cake-bg.png";
import coffee from "../assets/coffee.svg";
import drink from "../assets/drink.svg";
import tea from "../assets/tea.svg";
import giftcard from "../assets/giftcard.svg";
import giftcard2 from "../assets/giftcard2.svg";
import giftcard3 from "../assets/giftcard3.svg";
import round_table from "../assets/round_table.png";
import me from "../assets/me.png";

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
      <div style={{ display: "none" }}>
        <img src={cupcake} alt="Cup Cake" />
        <img src={cupcake2} alt="Cup Cake" />
        <img src={cupcake3} alt="Cup Cake" />
        <img src={cupcake4} alt="Cup Cake" />
        <img src={giftcard} alt="Cup Cake" />
        <img src={giftcard2} alt="Cup Cake" />
        <img src={giftcard3} alt="Cup Cake" />
        <img src={coffee} alt="Cup Cake" />
        <img src={cakebg} alt="Cup Cake" />
        <img src={drink} alt="Cup Cake" />
        <img src={tea} alt="Cup Cake" />
        <img src={me} alt="Cup Cake" />
        <img src={round_table} alt="Cup Cake" />
      </div>
    </div>
  );
};

export default HeroSection;
