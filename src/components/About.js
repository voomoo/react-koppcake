import { useEffect } from "react";
import Aos from "aos";
import { Tooltip } from "antd";
import me from "../assets/me.png";
import { IoLogoDribbble } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiMailDotRu } from "react-icons/si";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="trending"
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="social-links">
        <a href="https://dribbble.com/voomoo" target="blank">
          <div
            style={{ position: "relative", top: "40px" }}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-easing="ease-in-back"
          >
            <Tooltip title="Dribbble">
              <IoLogoDribbble size={38} color="#1a8aac" />
            </Tooltip>
          </div>
        </a>
        <a href="https://github.com/voomoo" target="blank">
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-easing="ease-in-back"
          >
            <Tooltip title="Github">
              <VscGithub size={30} color="#1a8aac" />
            </Tooltip>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rakibul-hasan-922708155/"
          target="blank"
        >
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-easing="ease-in-back"
          >
            <Tooltip title="Linkedin">
              <TiSocialLinkedinCircular size={40} color="#1a8aac" />
            </Tooltip>
          </div>
        </a>
        <a href="mailto: rakib.7896@gmail.com">
          <div
            style={{ position: "relative", top: "40px" }}
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-easing="ease-in-back"
          >
            <Tooltip title="Email: rakib.7896@gmail.com">
              <SiMailDotRu size={30} color="#1a8aac" />
            </Tooltip>
          </div>
        </a>
      </div>
      <div className="me-img" data-aos="flip-right">
        <Tooltip title="Rakibul Hasan">
          <img src={me} alt="" />
        </Tooltip>
      </div>

      <h1
        style={{ color: "white", marginTop: "10px" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Rakibul Hasan
      </h1>
    </div>
  );
};

export default About;
