import { useEffect } from "react";
import { Row, Col } from "antd";
import Aos from "aos";
import TrendingCard from "./TrendingCard";

const Trending = ({ cakes }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="trending"
      style={{
        background: "#3dc2eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row gutter={[0, 24]} justify="center" style={{ margin: "20px 0px" }}>
        {cakes.map((cake, index) => (
          <Col
            key={index}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TrendingCard
              name={cake.name}
              img={cake.img}
              rating={cake.rating}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Trending;
