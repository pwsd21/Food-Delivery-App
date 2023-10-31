import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data, showItems);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg pl-4">
            {data.title}
            {`(${data?.itemCards.length})`}
          </span>
          <span className="pr-4">⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
