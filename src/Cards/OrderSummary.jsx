import React from "react";
import { FaLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSummary = ({ counts }) => {
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate subtotal based on counts
  const subtotal = cartItems.reduce((accumulator, item, index) => {
    const price = parseFloat(item.price) || 0;
    return accumulator + price * (counts[index] || 1);
  }, 0);

  return (
    <>
      {/* ORDER-SECTION */}
      <div className="Order-section">
        <h3 className="fw-bold text-center">Order Summary</h3>
        <div className="hr-container">
          <hr className="hr" />
        </div>
        <div className="select-container d-flex align-items-center justify-content-center">
          <select className="form" aria-label="Default select example">
            <option selected>Add order note</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="hr-container">
          <hr className="hr" />
        </div>
        {/* SUBTOTAL-AMOUNT */}

        <div className="SUBTOTAL m-2 d-flex align-items-center justify-content-center">
          <div>
            <h6>Subtotal :-</h6>
          </div>
          <div>
            <h6>$ {subtotal.toFixed(2)} USD</h6>{" "}
            {/* Use toFixed to limit decimal places */}
          </div>
        </div>
        <div className="d-flex m-2 align-items-center justify-content-center gap-3">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="avv">
            I agree to the{" "}
            <a className="avv" href="">
              terms and refund policy
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btnn bn m-2 btn btn-success btn-lg w-30">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
