import { useState } from "react";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
