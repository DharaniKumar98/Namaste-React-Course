import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category, index) => (
        <div key={category?.card?.card?.title}>
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex && true}
            indexShow={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
          {/* <ItemList items={category?.card?.card?.itemCards}/> */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

// {/* <h2>Menu</h2> */}
// <ul>

//   {/* {itemCards.map((item) => (
//     <li key={item.card.info.id}>
//       {item.card.info.name} - {item.card.info.price / 100}
//     </li>
//   ))} */}
// </ul>
// {/* categories accordian */}
