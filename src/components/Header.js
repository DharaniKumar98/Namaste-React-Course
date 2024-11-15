import { useState } from "react";
import { Link } from "react-router-dom";
import orderFoodImg from "../../order-food.png";
import cartImg from "../../shopping-cart.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={orderFoodImg} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          <li>
            <img className="cart-logo" src={cartImg} />
          </li>
          <button className="login-logout-btn" onClick={() =>{
            btnName === "Login"? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
