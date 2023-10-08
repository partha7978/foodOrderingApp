import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.1
    );
    setListOfRestaurants(filteredList);
    console.log(listOfRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9298689&lng=77.6848366");
      const jsonData = await data.json();
    setListOfRestaurants(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    console.log(jsonData, "jsonData");
    console.log(listOfRestaurants);
  }

  console.log("body rendered")

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for a restaurant" />
        <div className="filters">
          <button className="filter__btn">All</button>
          <button
            className="filter__btn"
            onClick={() => {
              handleFilter();
            }}
          >
            Top Rated
          </button>
          <button className="filter__btn">Clear</button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
