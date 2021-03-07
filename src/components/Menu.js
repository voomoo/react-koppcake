import { Link } from "react-router-dom";
import round_table from "../assets/round_table.png";
import MenuItem from "./MenuItem";

const Menu = ({ cakes }) => {
  return (
    <div className="menu">
      <div className="banner">
        <h1 style={{ color: "white" }}>
          There is nothing <br /> a koppCake and <br /> Tea can’t solve
        </h1>
        <img src={round_table} alt="" height="100%" />
      </div>
      <div className="menu-items">
        {cakes.map((cake, index) => (
          <Link to={`/cake-info/${index}`} key={index}>
            <MenuItem key={index} name={cake.name} img={cake.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
