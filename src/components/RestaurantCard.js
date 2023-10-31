import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ resData }) => {
  if (resData === null) {
    return <Shimmer />;
  }
  const {
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    name,
    totalRatingsString,
    sla,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[270px] hover:bg-gray-300">
      <img
        className="rounded-lg h-48 w-[100%]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>
        {cuisines.length < 4
          ? cuisines.join(",")
          : cuisines.slice(0, 3).join(",")}
      </h4>

      <h4>
        {"⭐"} Ratings: {avgRating}
        {`(${totalRatingsString})`}
      </h4>
      <h4>
        {"🪙"}
        {costForTwo}
      </h4>
      <h4>
        {" "}
        {"🚚"}
        {"Delivery"}
        {"⏰"} {sla.deliveryTime}
        {"mins"}
      </h4>
    </div>
  );
};

// Higher Order Component

// Input - Restaurant card  ==> Returns PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
