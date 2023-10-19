import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

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

  useEffect(() => {
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  }, []);

  // conditional rendering
  // if(listOfRestaurants === 0) {
  //   return <Shimmer />
  // }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
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
          return <RestaurantCard key={item.info.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
