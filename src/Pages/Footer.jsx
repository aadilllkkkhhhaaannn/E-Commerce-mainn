import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="footer-content">
            <h3 className="" style={{ color: "#198754" }}>Canopy</h3>
            {/* <p className="ftr text-dark m-3">
              This is a demo store by Clean. Canvas All Images and Video Content
              contesy of Shutterstocks and Pexis , <br /> and are not for and
              are reuse on other store.
            </p> */}
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/aadilllkkkhhhaaannn"
              target="_blank"
            >
              <FaInstagram className="m-2" />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin className="m-2" />
            </a>
            <a href="https://www.facebook.com/aadilkhaann.09" target="_blank">
              <FaFacebook className="m-2" />
            </a>
            <a href="https://github.com/aadilllkkkhhhaaannn/">
              <FaGithub className="m-2" />
            </a>
          </div>
          <ul class="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>

          <div class="footer-bottom">
            <p className=" pp d-flex text-dark align-items-start justify-content-center">
              @copyright 2024 All rights reserved || Made with ❤️ by AadilKhan
            </p>{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
//  <div className="Footer m-5">
//    <div className="name d-flex align-items-center justify-content-center">
//      <div>
//        <h3>Canopy</h3>
//      </div>
//      <div>
//        <p className="all m-3">
//          All <br /> Departments
//        </p>
//      </div>{" "}
//      <div>
//        <p className="m-3">
//          Help & <br /> Support
//        </p>
//      </div>{" "}
//      <div>
//        <p>Resipes & Inspiration</p>
//      </div>{" "}
//    </div>

//    {/* NAME */}

//    <div className="foter d-flex align-items-start justify-content-center">
//      <div>
//        <p className="demo text-dark">
//          This is a demo store by Clean. <br /> Canvas All Images and Video{" "}
//          <br /> Content contesy of Shutterstocks <br /> and Pexis , and are not
//          for and are reuse <br />
//          on other store.
//        </p>

//        <div className="icons p-4">
//          <a
//            href="https://www.instagram.com/aadilllkkkhhhaaannn"
//            target="_blank"
//          >
//            <FaInstagram className="m-2" />
//          </a>
//          <a href="https://www.linkedin.com/feed/" target="_blank">
//            <FaLinkedin className="m-2" />
//          </a>
//          <a href="https://www.facebook.com/aadilkhaann.09" target="_blank">
//            <FaFacebook className="m-2" />
//          </a>
//          <a href="https://github.com/aadilllkkkhhhaaannn/">
//            <FaGithub className="m-2" />
//          </a>
//        </div>
//      </div>
//      <div>
//        <p className="text-dark frts">
//          Fruit & <br /> Vegetables{" "}
//        </p>
//        <p className="text-dark">Meet & Fish</p>{" "}
//        <p className="text-dark">
//          Cheese & <br /> Dairy{" "}
//        </p>{" "}
//        <p className="text-dark">
//          Cooking <br /> Ingredients{" "}
//        </p>
//        <p className="text-dark">The Bakery</p>
//        <p className="text-dark">New In </p>
//      </div>
//      <div className="cstm">
//        <p className="text-dark">
//          Customer
//          <br /> Service{" "}
//        </p>
//        <p className="text-dark">Contact Us</p>{" "}
//        <p className="text-dark">About Us</p>{" "}
//        <p className="text-dark">Returns Info </p>
//        <p className="text-dark">The Bakery</p>
//        <p className="text-dark">New In </p>
//      </div>

//      <div>
//        <p className="demoo text-dark">
//          This is a demo store by Clean. <br /> Canvas All Images and Video{" "}
//          <br /> Content contesy of Shutterstocks <br /> and Pexis , and are not
//          for and are reuse <br />
//          on other store.
//        </p>
//      </div>
//    </div>
//    <p className="d-flex align-items-start justify-content-center">
//      @copyright 2024 All rights reserved || Made with ❤️ by AadilKhan
//    </p>
//  </div>;
