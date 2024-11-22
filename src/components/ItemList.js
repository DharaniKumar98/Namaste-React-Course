import { useDispatch } from "react-redux";
import { ITEM_IMAGE_CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
      dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 text-left border-b-2">
          <div className="flex">
            <div className="w-9/12">
              <div className="font-bold text-md">{item.card.info.name}</div>
              <div className="font-semibold text-md">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="text-sm pr-10">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              {item.card.info.imageId ? (
                <>
                  <div className="absolute">
                    <button className="font-bold shadow-md text-green-500 bg-white px-6 py-1 ml-7 mt-20 border border-gray-300 rounded-lg" 
                    onClick={() => handleAddItem(item)}>
                      ADD
                    </button>
                  </div>
                  <img
                    src={ITEM_IMAGE_CDN + item.card.info.imageId}
                    className="w-full h-24 rounded-md"
                  />
                </>
              ) : (
                <div className="absolute">
                  <button className="font-bold shadow-md text-green-500 bg-white px-6 py-1 ml-7 mt-2 border border-gray-300 rounded-lg">
                    ADD
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
