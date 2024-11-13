import orderFoodImg from "../../order-food.png";
import cartImg from "../../shopping-cart.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
