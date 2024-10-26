import React from 'react'
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import OrderSummary from '../Cards/OrderSummary';
const FooterOrder = () => {
  return (
    <>
    <OrderSummary />
      <div className="Footer m-5">
        <div className="name d-flex align-items-center justify-content-center">
          <div>
            <h3>Canopy</h3>
          </div>
          <div>
            <p className="all m-3">
              All <br /> Departments
            </p>
          </div>{" "}
          <div>
            <p className="m-3">
              Help & <br /> Support
            </p>
          </div>{" "}
          <div>
            <p>Resipes & Inspiration</p>
          </div>{" "}
        </div>

        {/* NAME */}

        <div className="foter d-flex align-items-start justify-content-center">
          <div>
            <p className="demo text-dark">
              This is a demo store by Clean. <br /> Canvas All Images and Video{" "}
              <br /> Content contesy of Shutterstocks <br /> and Pexis , and are
              not for and are reuse <br />
              on other store.
            </p>

            <div className="icons p-4">
              <FaFacebook className="m-2" />
              <FaYoutube className="m-2" />
              <FaInstagram className="m-2" />
              <FaTwitter className="m-2" />
            </div>
          </div>
          <div>
            <p className="text-dark">
              Fruit & <br /> Vegetables{" "}
            </p>
            <p className="text-dark">Meet & Fish</p>{" "}
            <p className="text-dark">
              Cheese & <br /> Dairy{" "}
            </p>{" "}
            <p className="text-dark">
              Cooking <br /> Ingredients{" "}
            </p>
            <p className="text-dark">The Bakery</p>
            <p className="text-dark">New In </p>
          </div>
          <div className="cstm">
            <p className="text-dark">
              Customer
              <br /> Service{" "}
            </p>
            <p className="text-dark">Contact Us</p>{" "}
            <p className="text-dark">About Us</p>{" "}
            <p className="text-dark">Returns Info </p>
            <p className="text-dark">The Bakery</p>
            <p className="text-dark">New In </p>
          </div>

          <div>
            <p className="demoo text-dark">
              This is a demo store by Clean. <br /> Canvas All Images and Video{" "}
              <br /> Content contesy of Shutterstocks <br /> and Pexis , and are
              not for and are reuse <br />
              on other store.
            </p>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />

              <label className="inpt" for="floatingInput">
                your Email
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterOrder
