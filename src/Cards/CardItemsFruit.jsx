import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../AddToCard/CardSlice";
import { toast } from "react-hot-toast";

const CardItemsFruit = ({ users, query, setQuery }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCart = (cart) => {
    toast.success(`${cart.name} Added!`);
    dispatch(addCart(cart));
  };

  return (
    <>
      <div className="card nav rounded-0">
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
              />
            </div>
            {/* <FaMicrophoneAlt /> */}
          </div>

          <div className="logo">
            {/* <i class="fa-regular m-3 fa-user text-white"></i> */}
            <button type="button" class="btn position-relative">
              <Link to={"/cartItem"}>
                <i class="fa-solid fa-cart-shopping my-2 text-white"></i>
              </Link>
              <span class="text-dark position-absolute top-0 my-2 start-100 translate-middle badge rounded-pill bg-white">
                {cartItems.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* CARD-ITEM*/}
      <div className="Cards">
        <h4 className="d-flex align-items-center justify-content-center">
          Shop Grocries : <FaArrowRightLong className="m-2" />
        </h4>
        <div className="d-flex align-items-center justify-content-center">
          {users
            ?.filter((cartItems) =>
              cartItems?.name?.toLowerCase()?.includes(query)
            )
            .map((curUser) => {
              const { description, name, price, category, img } = curUser;
              return (
                <div className="card-f-1 m-4">
                  <img className="" src={img} alt="" />
                  <div className="text-name m-3">
                    <h6 className="nam">Name :- {name}</h6>
                    <h6>Price :- ${price}</h6>
                    <h6>Description:- {description}</h6>
                    <h6>Category:- {category}</h6>
                    <button
                      onClick={() => handleCart(curUser)}
                      className="cart btn btn-sm rounded-0 bg-warning text-light"
                    >
                      <i className="fa-solid fa-cart-shopping text-white"></i>{" "}
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CardItemsFruit;
