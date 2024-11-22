import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import orderFoodImg from "../../order-food.png";
import cartImg from "../../shopping-cart.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);

  // Subscribing to the cartSlice in the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <Link to="/">
          <img className=" w-20 p-2 m-2" src={orderFoodImg} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex items-center">
          <li className="px-2 m-1">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2 m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 m-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 m-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 m-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-1 m-1">
            <Link to="/cart"><img className="w-12 p-2 m-2" src={cartImg} /></Link>
            <div className="absolute top-[14px] left-[1169px] w-[18px] h-[18px] text-sm pb-2 bg-red-600 border-white text-white rounded-3xl text-center">
              {cartItems.length}
            </div>
          </li>
          <button
            className="px-2 m-2 border border-black rounded-md "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-1 m-1 font-semibold">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
