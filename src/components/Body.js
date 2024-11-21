import RestaurantCard, { resCardWithLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser , setUserName} = useContext(UserContext);

  const RestaurantCardWithLabel = resCardWithLabel(RestaurantCard);

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

  console.log(filteredList);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>The network connection has been lost.</h1>;
  }

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter m-1 p-1 flex ">
        <input
          type="text"
          name="search-string"
          className="border border-solid border-black rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-2 mx-2 bg-green-100 rounded-md"
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
            className="px-2 mx-2 bg-gray-200 rounded-md"
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
        <div>
          <label htmlFor="username" className="p-1">
            {" "}
            UserName :{" "}
          </label>
          <input
            type="text"
            className="border border-black px-2"
            name="username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="my-2 py-2 flex flex-wrap">
        {filteredList.map((res) => (
          <Link key={res.info?.id} to={"/restaurants/" + res.info.id}>
            {res.info.promoted ? (
              <RestaurantCardWithLabel resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
