import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const RestaurantCard = ({ resData }) => {
  if (resData === null) {
    return <Shimmer />;
  }
  const { cloudinaryImageId, cuisines, avgRating, costForTwo, name } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>Ratings: {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
