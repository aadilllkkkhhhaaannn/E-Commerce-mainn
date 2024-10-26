import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const CardItemsVeg = () => {
  const [count, Setcount] = useState(0);

  const IncreaseNumber = () => {
    Setcount(count + 1);
  };

  const DecreaseNumber = () => {
    Setcount(count - 1);
  };

  return (
    <>
      <div className="Cards">
        <h4 className="d-flex align-items-center justify-content-center">
          Category : Vegetable <FaArrowRightLong className="m-2" />
        </h4>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card-f-1 m-4">
            <img
              className=""
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0014_BrocA_ddadc7f2-bdb3-41d5-9224-17ffeea74475.jpg?v=1711821961&width=320"
              alt=""
            />
            <div className="text-name m-3">
              <h6>Name :- Fresh Broccoli Crowns</h6>
              <h6>Price :- 25</h6>
              <h6>Description:- Fresh fruits before 7 days.</h6>
              <h6>Category:- Vegetables</h6>
              <button className="cart btn btn-sm rounded-0 bg-warning text-light">
                <i class="fa-solid fa-cart-shopping text-white"></i>
                ADD TO CART
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="card-f-1 m-4">
            <img
              className=""
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0014_BrocA_ddadc7f2-bdb3-41d5-9224-17ffeea74475.jpg?v=1711821961&width=320"
              alt=""
            />
            <div className="text-name m-3">
              <h6>Name :- Fresh Broccoli Crowns</h6>
              <h6>Price :- 25</h6>
              <h6>Description:- Fresh fruits before 7 days.</h6>
              <h6>Category:- Vegetables</h6>
              <button className="cart btn btn-sm rounded-0 bg-warning text-light">
                <i class="fa-solid fa-cart-shopping text-white"></i>
                ADD TO CART
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="card-f-1 m-4">
            <img
              className=""
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0014_BrocA_ddadc7f2-bdb3-41d5-9224-17ffeea74475.jpg?v=1711821961&width=320"
              alt=""
            />
            <div className="text-name m-3">
              <h6>Name :- Fresh Broccoli Crowns</h6>
              <h6>Price :- 25</h6>
              <h6>Description:- Fresh fruits before 7 days.</h6>
              <h6>Category:- Vegetables</h6>
              <button className="cart btn btn-sm rounded-0 bg-warning text-light">
                <i class="fa-solid fa-cart-shopping text-white"></i>
                ADD TO CART
              </button>
            </div>
          </div>
          {/* 4 */}
          <div className="card-f-1 m-4">
            <img
              className=""
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0014_BrocA_ddadc7f2-bdb3-41d5-9224-17ffeea74475.jpg?v=1711821961&width=320"
              alt=""
            />
            <div className="text-name m-3">
              <h6>Name :- Fresh Broccoli Crowns</h6>
              <h6>Price :- 25</h6>
              <h6>Description:- Fresh fruits before 7 days.</h6>
              <h6>Category:- Vegetables</h6>
              <button className="cart btn btn-sm rounded-0 bg-warning text-light">
                <i class="fa-solid fa-cart-shopping text-white"></i>
                ADD TO CART
              </button>
            </div>

            {/*  */}
 
         
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItemsVeg;
