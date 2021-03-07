import { useEffect } from "react";
import Aos from "aos";
import giftcard from "../assets/giftcard.svg";
import giftcard2 from "../assets/giftcard2.svg";
import giftcard3 from "../assets/giftcard3.svg";

const GiftCard = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="gift">
      <div
        className="gift-right"
        data-aos="slide-down"
        data-aos-delay="500"
      ></div>
      <div className="gift-left" data-aos="slide-right"></div>
      <div className="gift-cards">
        <div
          className="gift-card"
          data-aos="fade-right"
          data-aos-delay="1200"
          data-aos-easing="ease-out-back"
        >
          <img src={giftcard3} alt="" onLoad={() => console.log("loaded")} />
        </div>
        <div
          className="gift-card"
          data-aos="flip-right"
          data-aos-delay="1000"
          data-aos-easing="ease-out-back"
        >
          <img src={giftcard} alt="" />
        </div>
        <div
          className="gift-card"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-easing="ease-out-back"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <img src={giftcard2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
