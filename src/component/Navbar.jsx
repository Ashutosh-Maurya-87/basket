import React from "react";
import "../component/Navbar.css";
import img from "../images/basketimage.jpg";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div>
          {/* <ShoppingBasketIcon /> */}
          <img className="image" src={img} alt=" " />
          <h1 id="text">Hello Basket!</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
