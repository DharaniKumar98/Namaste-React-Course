import React from "react";
import ReactDOM from "react-dom/client";

import orderFoodImg from "./order-food.png";
import cartImg from "./shopping-cart.png";

/* 
Header
 - Logo
 - Nav Items
Body
 - search
 - RestaurantContainer
    -RestaurantCard
        - Img
        - Restaurant Name, Cuisine, Star Rating, delivery time , cost 
Footer
 - Copyright
 - Address
 - Contact Details
*/

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

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { name, cuisines, avgRatingString, sla, costForTwo } = props.resdata;
  console.log(name);
  console.log(cuisines);
  console.log(avgRatingString);
  console.log(sla);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/779d0bab-e333-433c-aac2-9fdbd262c533_646929.JPG"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resObj = {
  id: "364441",
  name: "Pizza Hut",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/eb7ef724-258b-4a1c-b98a-cce17becc35f_364441.jpg",
  locality: "TGF Variety Mall",
  areaName: "Kurnool",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas"],
  avgRating: 4.1,
  parentId: "721",
  avgRatingString: "4.1",
  totalRatingsString: "3.3K+",
  sla: {
    deliveryTime: 31,
    lastMileTravel: 0.8,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "0.8 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-11-11 23:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹80",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resdata={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
