import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(1);
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo, "ress");

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage} {`🌟${avgRating}`}
      </h3>
      {/* Categories Accordion */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
