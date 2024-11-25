import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {

  const {loggedInUser} = useContext(UserContext);

  const {
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = props.resData?.info;

  return (
    <div data-testid="test-resCard" className="m-2 p-4 w-[180px] h-[430px] rounded-md bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-md w-[170px] h-[120px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

//Higher order component - take component as input & returns an modified component 
export const resCardWithLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
