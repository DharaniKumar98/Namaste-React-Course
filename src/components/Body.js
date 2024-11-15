import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resListAPI = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8281257&lng=78.0372792&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const resListAPIResponse = await resListAPI.json();
    setListOfRes(
      resListAPIResponse?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setFilteredList(
      resListAPIResponse?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
  };

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter">
        <input
          type="text"
          name="search-string"
          className="search-string"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            const searchFilteredRes = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(searchFilteredRes);
          }}
        >
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.2
              );
              //setListOfRes(filteredList);
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <Link key={res.info?.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
