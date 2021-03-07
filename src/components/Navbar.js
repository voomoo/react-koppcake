import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";
import { Drawer } from "antd";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setActive("");
        }}
      >
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>KoppCake</h2>
        </div>
      </Link>
      <div className="nav-links">
        <Link
          to="/menu"
          onClick={() => {
            setActive("menu");
          }}
          className={active === "menu" ? "active" : ""}
        >
          Menu
        </Link>
        <Link
          to="/trending"
          onClick={() => {
            setActive("trending");
          }}
          className={active === "trending" ? "active" : ""}
        >
          Trending
        </Link>
        <Link
          to="/gift"
          onClick={() => {
            setActive("gift");
          }}
          className={active === "gift" ? "active" : ""}
        >
          Gift Cards
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setActive("about");
          }}
          className={active === "about" ? "active" : ""}
        >
          About
        </Link>
      </div>
      <CgMenuCake
        size={36}
        color="white"
        onClick={showDrawer}
        className="menu-icon"
      />
      <Drawer
        title={
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h2 style={{ color: "#3dc2eb" }}>KoppCake</h2>
          </div>
        }
        headerStyle={{ display: "flex", justifyContent: "center" }}
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={200}
        height={500}
        bodyStyle={{
          background: "#fff1bd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="nav-links-mbl">
          <Link
            to="/menu"
            onClick={() => {
              setActive("menu");
              onClose();
            }}
            className={active === "menu" ? "active" : ""}
          >
            Menu
          </Link>
          <Link
            to="/trending"
            onClick={() => {
              setActive("trending");
              onClose();
            }}
            className={active === "trending" ? "active" : ""}
          >
            Trending
          </Link>
          <Link
            to="/gift"
            onClick={() => {
              setActive("gift");
              onClose();
            }}
            className={active === "gift" ? "active" : ""}
          >
            Gift Cards
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setActive("about");
              onClose();
            }}
            className={active === "about" ? "active" : ""}
          >
            About
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
