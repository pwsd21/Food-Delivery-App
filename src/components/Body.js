import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button className="filter-btn" onClick={handleFilter}>
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((item) => {
          return (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              <RestaurantCard resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
