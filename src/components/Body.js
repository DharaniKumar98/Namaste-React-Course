import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">Search</div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("Button Clicked");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        <RestaurantCard resdata={resObj} />
      </div>
    </div>
  );
};

export default Body;
