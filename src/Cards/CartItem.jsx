import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightLong, FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [deleteItem, setDeleteItem] = useState([]);
  const [counts, setCounts] = useState(cartItems.map(() => 1));
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Update deleteItem and counts when cartItems change
    setDeleteItem(cartItems);
    setCounts(cartItems.map(() => 1));
  }, [cartItems]);

  useEffect(() => {
    // Calculate subtotal whenever deleteItem or counts change
    calculateSubtotal(deleteItem, counts);
  }, [deleteItem, counts]);

  const calculateSubtotal = (items, counts) => {
    const total = items.reduce((acc, item, index) => {
      return acc + item.price * counts[index];
    }, 0);
    setSubtotal(total);
  };

  const deleteTodo = (id) => {
    const updatedItems = deleteItem.filter((item) => item.id !== id);
    const updatedCounts = counts.filter(
      (_, index) => deleteItem[index].id !== id
    );
    setDeleteItem(updatedItems);
    setCounts(updatedCounts);
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
              <input className="inpt" type="text" placeholder="groceries" />
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
      <div className="cartItem">
        <h4 style={{ fontWeight: "bold" }} className="sk text-center">
          Shopping Cart <FaArrowRightLong />
        </h4>
        {deleteItem.length === 0 ? (
          <h1 className="text-dark text-center">
            <img
              className="s-img"
              src="https://limasy.com/img/empty-animation1.gif"
              alt=""
            />

            <div className="text-center m-2">
              <Link className="av" to={"/carditemsfruit"}>
                <FaLeftLong /> Continue Shopping
              </Link>
            </div>
          </h1>
        ) : (
          <>
            <div className="named">
              <div className="names p-3 d-flex align-items-center justify-content-center">
                <div>
                  <p className="prd">PRODUCT DETAILS</p>
                </div>
                <div>
                  <p className="qty">QUANTITY</p>
                </div>
                <div>
                  <p>PRICE</p>
                </div>
                <div>
                  <p>TOTAL</p>
                </div>
              </div>
            </div>

            {deleteItem.map((cart, index) => (
              <CartItem
                key={cart?._id}
                cart={cart}
                deleteTodo={deleteTodo}
                index={index}
                counts={counts}
                setCounts={setCounts}
              />
            ))}
          </>
        )}
        <OrderSummary counts={counts} subtotal={subtotal} />
      </div>
    </>
  );
};

const CartItem = ({ deleteTodo, cart, index, counts, setCounts }) => {
  const IncreaseNumber = () => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const DecreaseNumber = () => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const totalPrice = cart.price * counts[index];

  return (
    <div className="Carts">
      <div className="starter">
        <div className="d-flex starters align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <div className="img">
              <img src={cart?.img} alt="product" />
            </div>
            <div>
              <p className="text-dark str">{cart?.name}</p>
              <div className="m-1 delete" onClick={() => deleteTodo(cart?.id)}>
                <p className="remove">REMOVE</p>
              </div>
            </div>
          </div>
          <div>
            <div className="btnn d-flex align-items-center justify-content-center">
              <div className="green">
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-sm text-dark"
                    onClick={DecreaseNumber}
                  >
                    <FaMinus />
                  </button>
                  <p className="m-2 p">{counts[index]}</p>
                  <button
                    className="btn btn-sm text-dark"
                    onClick={IncreaseNumber}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div >
          <div>
            <h6 className="price-containe rate">${totalPrice.toFixed(2)}</h6>
          </div>
          <div>
            <h6 className="price-containe rates">${totalPrice.toFixed(2)}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
