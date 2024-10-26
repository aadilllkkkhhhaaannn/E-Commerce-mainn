import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../AddToCard/CardSlice";
import toast from "react-hot-toast";

const FreshFruits = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCart = (cart) => {
    toast.success(`${cart.name} Added!`);

    dispatch(addCart(cart));
  };
  return (
    <>
      <div className="Fresh-fruits">
        <div className="text-name d-flex align-items-center justify-content-around">
          <div className="m-2">
            <h2>Fresh in Today</h2>
          </div>
          <div>
            <Link className="link" to={"fruits"}>
              {" "}
              View All
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <div className="card card-1 rounded-0">
            <img
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0007_PassionFruitA.jpg?v=1711830267&width=320"
              className=" card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="text-dark text-center">Fresh Passion Fruit</p>
              <p className="oz d-flex align-items-center justify-content-center">
                3.0 oz
              </p>
              <div className=" d-flex align-items-center justify-content-center icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                (4)
              </div>
              <div className="dollar d-flex align-items-center justify-content-center">
                <p>$150</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() =>
                    handleCart({
                      name: "Fresh Passion Fruit",
                      price: "150",
                      img: "https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0007_PassionFruitA.jpg?v=1711830267&width=320",
                    })
                  }
                  className="m-3 cart btn btn-success text-light w-100"
                >
                  +cart
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card card-1 rounded-0">
            <img
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0000_GrapefruitA.jpg?v=1711831480&width=320"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="text-dark text-center">Fresh Red Grapefrui</p>
              <p className="oz d-flex align-items-center justify-content-center">
                3.0 oz
              </p>
              <div className=" d-flex align-items-center justify-content-center icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                (4)
              </div>
              <div className="dollar d-flex align-items-center justify-content-center">
                <p>$200</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() =>
                    handleCart({
                      name: "Fresh Red Grapefruit",
                      price: "200",
                      img: "https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0000_GrapefruitA.jpg?v=1711831480&width=320",
                    })
                  }
                  className="m-3 cart btn btn-success text-light w-100"
                >
                  +cart
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="card card-1 rounded-0">
            <img
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0002_MelonA.jpg?v=1711829793&width=320"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="text-dark text-center">Cantaloupe</p>
              <p className="oz d-flex align-items-center justify-content-center">
                3.0 oz
              </p>
              <div className=" d-flex align-items-center justify-content-center icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                (4)
              </div>
              <div className="dollar d-flex align-items-center justify-content-center">
                <p>$150</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() =>
                    handleCart({
                      name: "Fresh green Cantaloupe",
                      price: "150",
                      img: "https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0002_MelonA.jpg?v=1711829793&width=320",
                    })
                  }
                  className="m-3 cart btn btn-success text-light w-100"
                >
                  +cart
                </button>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="card card-1 rounded-0">
            <img
              src="https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0008_OrangesA.jpg?v=1711830798&width=320"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="text-dark text-center">Fresh Navel Orange</p>
              <p className="oz d-flex align-items-center justify-content-center">
                3.0 oz
              </p>
              <div className=" d-flex align-items-center justify-content-center icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                (4)
              </div>
              <div className="dollar d-flex align-items-center justify-content-center">
                <p>$50</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() =>
                    handleCart({
                      name: "Fresh Navel Orange",
                      price: "50",
                      img: "https://canopy-theme-natural.myshopify.com/cdn/shop/files/CANOPYNaturalProductImages_0008_OrangesA.jpg?v=1711830798&width=320",
                    })
                  }
                  className="m-3 cart btn btn-success text-light w-100"
                >
                  +cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreshFruits;
