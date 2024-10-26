import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ setQuery }) => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="card nav rounded-0 p-1">
        <div className="m-3 d-flex align-items-center justify-content-around">
          <div>
            <h3 style={{ cursor: "pointer" }} className="text-white">
              Canopy
            </h3>
          </div>
          <div className="input d-flex align-items-center justify-content-center gap-4">
            <div className="input-container">
              <input
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                className="inpt"
                type="text"
                placeholder="groceries"
              />{" "}
            </div>
            {/* <FaMicrophoneAlt /> */}
          </div>
          <div className="logo">
            <button type="button" className="btn position-relative">
              <Link to={"/cartItem"}>
                <i className="fa-solid fa-cart-shopping my-2 text-white"></i>
              </Link>
              <span className="text-dark position-absolute top-0 my-2 start-100 translate-middle badge rounded-pill bg-white">
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* LIST-ITEM */}
      <div className="lis d-flex align-items-center justify-content-center">
        <div className="m-4 d-flex align-items-center justify-content-start gap-5">
          <span className="home">
            <li class="list-group-item">Home</li>
          </span>
          <li class="list-group-item">
            Groceries
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <span style={{ color: "red" }}>
            <li class="list-group-item">
              Offers & Rollbacks
              <i class="fa-solid fa-angle-down"></i>
            </li>
          </span>
          <a className="" href="https://hamza-s-portfolio-vg5o.vercel.app/">
            <li className="aa list-group-item">About Us</li>
          </a>
          <li class="list-group-item">Inspiration & Recipes</li>
          <li class="list-group-item">Contact</li>
          <li class="list-group-item">
            Demos
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <button className="btn btn-success btn-sm">
            {" "}
            <FaEyeSlash />
            In season now!
          </button>
        </div>
      </div>
      <div className="shopCard ">
        <p className="d-flex align-items-center justify-content-center p-1">
          Great Deals on your weekly shopCard.{" "}
          <a href="">
            {" "}
            <Link className="grn" to={"/carditemsfruit"}>
              Shop Now
            </Link>
          </a>
        </p>
      </div>
    </>
  );
};

export default Navbar;
