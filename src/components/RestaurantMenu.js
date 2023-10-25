import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
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
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
