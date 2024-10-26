import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CardItemsDairy = () => {
  return (
    <>
      <div className="Cards">
        <h4 className="d-flex align-items-center justify-content-center">
          Category : Dairy <FaArrowRightLong className="m-2" />
        </h4>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card-f-1 m-4">
            <img
              className=""
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/products/CCFarmShopProductsCheese_Dairy1200x1200_MILK.jpg?v=1622210304&width=320"
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
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/products/CCFarmShopProductsCheese_Dairy1200x1200_SWISS.jpg?v=1622210302&width=320"
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
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/products/CCFarmShopProductsCheese_Dairy1200x1200_SOURCREAM.jpg?v=1622210305&width=320"
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
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/products/CCFarmShopProductsCheese_Dairy1200x1200_BUTTER.jpg?v=1622210293&width=320"
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
        </div>
      </div>
    </>
  );
};

export default CardItemsDairy;
