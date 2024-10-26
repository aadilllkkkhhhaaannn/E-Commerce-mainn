import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../AddToCard/CardSlice";
import toast from "react-hot-toast";

const Frutis = ({ users, query, setQuery }) => {
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
            {/* <select class="form-select" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
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
      <div className="Fresh-fruits bb">
        <div className="text-name d-flex align-items-center justify-content-around">
          <h4 className="d-flex align-items-center justify-content-center">
            Fruits : <FaArrowRightLong className="m-2" />
          </h4>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {users
            ?.filter((cartItems) =>
              cartItems.name?.toLowerCase().includes(query)
            )
            .map((curUser) => {
              const { name, img, price } = curUser;
              return (
                <div className="card card-1 rounded-0" key={name}>
                  <img src={img} className="card-img-top" alt={name} />
                  <div className="card-body">
                    <p className="text-dark text-center">{name}</p>
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
                      <p>${price}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <button
                        onClick={() => handleCart(curUser)}
                        className="m-3 cart btn btn-success text-light w-100"
                      >
                        +cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Frutis;
