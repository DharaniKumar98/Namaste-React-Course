import { useState } from "react";
import { Link } from "react-router-dom";
import orderFoodImg from "../../order-food.png";
import cartImg from "../../shopping-cart.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={orderFoodImg} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus?"🟢":"🔴"}</li>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
