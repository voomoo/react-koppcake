import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tea from "../assets/tea.svg";
import coffee from "../assets/coffee.svg";
import drink from "../assets/drink.svg";
import Aos from "aos";

let teaCount = 0;
let coffeeCount = 0;
let drinkCount = 0;

const CakeInfo = ({ cakes }) => {
  const [subTea, setSubTea] = useState(0);
  const [subCoffee, setSubCoffee] = useState(0);
  const [subDrink, setSubDrink] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    Aos.init({ duration: 1000 });
    teaCount = 0;
    coffeeCount = 0;
    drinkCount = 0;
  }, []);

  return (
    <div className="cake-info" data-aos="fade-right">
      <div className="info">
        <h1>{cakes[id].name}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ color: "white" }}>
              Rating:{" "}
              <span style={{ color: "#FCE38A" }}>{cakes[id].rating}</span>
            </h2>
          </div>
          <h1 style={{ color: "#FCE38A", fontWeight: "bold" }}>
            $9.
            <span style={{ fontSize: "24px", fontWeight: "normal" }}>99</span>
          </h1>
        </div>
        <h3 style={{ color: "white" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum in,
          expedita, eos maxime autem aspernatur neque, maiores nulla mollitia
          tempore commodi accusamus nostrum iste eum repellendus quasi libero
          cumque corporis.
        </h3>

        <div className="sub">
          <h2 style={{ color: "#FCE38A" }}>Serve With:</h2>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              {subTea ? (
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    background: "#FCE38A",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    left: "50px",
                    top: "20px",
                  }}
                >
                  <h3 style={{ marginTop: "5px" }}>{subTea}</h3>
                </div>
              ) : (
                ""
              )}
              <img
                src={tea}
                alt=""
                onClick={() => {
                  teaCount++;
                  setSubTea(teaCount);
                  console.log(teaCount);
                }}
              />
            </div>
            <div>
              {subCoffee ? (
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    background: "#FCE38A",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    left: "50px",
                    top: "20px",
                  }}
                >
                  <h3 style={{ marginTop: "5px" }}>{subCoffee}</h3>
                </div>
              ) : (
                ""
              )}
              <img
                src={coffee}
                alt=""
                onClick={() => {
                  coffeeCount++;
                  setSubCoffee(coffeeCount);
                  console.log(coffeeCount);
                }}
              />
            </div>
            <div>
              {subDrink ? (
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    background: "#FCE38A",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    left: "50px",
                    top: "20px",
                  }}
                >
                  <h3 style={{ marginTop: "5px" }}>{subDrink}</h3>
                </div>
              ) : (
                ""
              )}
              <img
                src={drink}
                alt=""
                onClick={() => {
                  drinkCount++;
                  setSubDrink(drinkCount);
                  console.log(drinkCount);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cake-img">
        <img src={cakes[id].img} alt="" />
      </div>
    </div>
  );
};

export default CakeInfo;
