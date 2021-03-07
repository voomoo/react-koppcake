import { useState, useEffect } from "react";
import Aos from "aos";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";

const TrendingCard = ({ name, img, rating }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [liked, setLiked] = useState(false);
  return (
    <div className="trending-card" data-aos="flip-right" data-aos-once="true">
      <div className="card-intro">
        <h4>$9.99</h4>
        <img src={img} alt="" />
      </div>
      <div className="card-details">
        <h2>{name}</h2>
        <div className="card-meta">
          <AiTwotoneHeart
            className="like"
            color={liked ? "#ff5c93" : "#3dc2eb"}
            size={24}
            onClick={() => {
              setLiked(!liked);
            }}
            style={{ cursor: "pointer" }}
          />
          <div>
            <h4>{rating}</h4>
            <AiTwotoneStar color="#3dc2eb" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
