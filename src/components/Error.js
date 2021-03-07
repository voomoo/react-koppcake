import badcake from "../assets/badcake.png";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={badcake} alt="" width="240px" />
      <h2
        style={{ margin: "10px 10px", color: "#FCE38A", textAlign: "center" }}
      >
        This Doesn't Look Healthy, Better Get{" "}
        <span
          style={{
            color: "white",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={useHistory().goBack}
        >
          Back
        </span>
      </h2>
    </div>
  );
};

export default Error;
