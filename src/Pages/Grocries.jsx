import React from "react";
import f1 from "../assets/watermelon.png";
import f2 from "../assets/Meet.jpeg";
import f3 from "../assets/milk.jpeg";
import f4 from "../assets/ginger.jpeg";
import f5 from "../assets/cake.jpeg";
import f6 from "../assets/cherry.jpeg";
import { Link } from "react-router-dom";

const Grocries = () => {
  return (
    <>
      <div className="Grocries">
        <div className="text-name d-flex align-items-center justify-content-around">
          <div className="m-2">
            <h3>Shop Grocries</h3>
          </div>
          <div>
            <Link className="link" to={"/carditemsfruit"}>
              view All
            </Link>
            {/* <a href="">View all</a> */}
          </div>
        </div>

        {/* FRUITS-PART */}
        <div className="fruits d-flex align-items-center justify-content-center">
          <div>
            <img src={f1} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              Fruit & <br /> Vegetables
            </h6>
          </div>
          <div>
            <img src={f2} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              Meet & Fish
            </h6>
          </div>
          <div>
            <img src={f3} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              Cheese & <br /> Dairy
            </h6>
          </div>
          <div>
            <img src={f4} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              Cooking <br /> Ingredients
            </h6>
          </div>
          <div>
            <img src={f5} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              The Bakery
            </h6>
          </div>
          <div>
            <img className="l-img" src={f6} alt="" />
            <h6 className="d-flex align-items-center justify-content-center">
              New In{" "}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grocries;
