import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems , indexShow  }) => {

    const handleClick = () => {
        indexShow();
    }

  return (
    <div>
      <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-md p-2 ">
        {/* Accordion Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
