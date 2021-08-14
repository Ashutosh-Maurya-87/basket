import React from "react";
import "../component/Navbar.css";
import img from "../images/basketimage.jpg";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketIcon';
//import Button from "@material-ui/core/Button";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div>
          {/* <ShoppingBasketIcon /> */}
          <img className="image" src={img} alt=" " />

          {/* <ShoppingBasketIcon /> */}

          <h1 id="text">Hello Basket!</h1>
          {/* <li className="list-item">here are basket image</li>
                <li className="list-item">here are basket image</li>
                <li className="list-item">here are basket image</li> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
