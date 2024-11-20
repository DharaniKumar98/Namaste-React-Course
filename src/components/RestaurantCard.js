import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = props.resData?.info;

  return (
    <div className="m-2 p-4 w-[180px] h-[430px] rounded-md bg-gray-100 hover:bg-gray-200" >
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
    </div>
  );
};

export default RestaurantCard;
