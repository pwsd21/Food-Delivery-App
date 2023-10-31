import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Simplified way to use useState - it's just array destructuring
  //   const arr = useState(resList);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (item) => item.info.avgRating > 4.2
    );
    setFilteredRestaurants(filteredList);
  };

  const handlePromotedRestaurants = () => {
    const promotedList = listOfRestaurants.filter(
      (item) => item.info.locality === "Huda Market"
    );
    setFilteredRestaurants(promotedList);
  };

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(listOfRestaurants, "lss");
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline </h1>;
  }

  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body bg-gray-200">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-1 bg-green-100 m-4 rounded-lg font-semibold"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-3 py-1 bg-blue-100 m-4 rounded-lg font-semibold"
            onClick={handleFilter}
          >
            {"✨"} Top Rated Restaurants
          </button>
          <button
            className="px-3 py-1 bg-blue-100 m-4 rounded-lg font-semibold"
            onClick={handlePromotedRestaurants}
          >
            {"🎯"} Promoted Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap bg-yellow-50 sm:bg-gray-100">
        {filteredRestaurants.map((item) => {
          return (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              {item.info.locality === "Huda Market" ? (
                <RestaurantCardPromoted resData={item} />
              ) : (
                <RestaurantCard resData={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
