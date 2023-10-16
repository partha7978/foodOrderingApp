import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const unChangedRestaurantList = useRestaurantData();
  const listOfRestaurants = unChangedRestaurantList;

  const handleFilter = (filterName) => {
    if (filterName === "top") {
      const filteredList = listOfRestaurants.filter(
        (restaurant) => restaurant?.info?.avgRating > 4.1
      );
      setListOfRestaurants(filteredList);
      console.log(listOfRestaurants);
    } else if (filterName === "clear" || filterName === "all") {
      setListOfRestaurants(unChangedRestaurantList);
      console.log(listOfRestaurants);
    }
  };
  const handleSearchFilter = () => {
    const filteredList = unChangedRestaurantList.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredList);
    console.log(listOfRestaurants, "listOfRestaurants");
    console.log(unChangedRestaurantList, "unChangedRestaurantList");
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <>
        <h1>Looks like you are offline</h1>
        <h3>Please check your internet connection</h3>
      </>
    );
  }

  console.log("body rendered");

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            placeholder="Search for a restaurant"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchBtn" onClick={() => handleSearchFilter()}>
            Search
          </button>
        </div>
        <div className="filters">
          <button className="filter__btn" onClick={() => handleFilter("all")}>
            All
          </button>
          <button
            className="filter__btn"
            onClick={() => {
              handleFilter("top");
            }}
          >
            Top Rated
          </button>
          <button className="filter__btn" onClick={() => handleFilter("clear")}>
            Clear
          </button>
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
