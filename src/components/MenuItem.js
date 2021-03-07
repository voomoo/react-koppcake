import { useEffect } from "react";
import Aos from "aos";

const MenuItem = ({ name, img }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="menu-item" data-aos="fade">
      <div className="cake-img" data-aos="zoom-out">
        <img src={img} alt="" />
      </div>
      <h3 data-aos="fade-right" data-aos-once="true" data-aos-offset="-200">
        {name}
      </h3>
    </div>
  );
};

export default MenuItem;
