import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [unChangedRestaurantList, setUnchangedRestaurantList] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9298689&lng=77.6848366"
    );
    const jsonData = await data.json();

    if (
      jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants === undefined
    ) {
      const newData = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9298689&lng=77.6848366"
      );
      const newJsonData = await newData.json();
      setListOfRestaurants(
        newJsonData?.data?.success?.cards[4]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setUnchangedRestaurantList(
        newJsonData?.data?.success?.cards[4]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } else {
      setListOfRestaurants(
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setUnchangedRestaurantList(
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    }
    console.log(jsonData, "jsonData");
    console.log(listOfRestaurants, "listOfRestaurants");
    console.log(unChangedRestaurantList, "unChangedRestaurantList");
  };

  const handleSearchFilter = () => {
    const filteredList = unChangedRestaurantList.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredList);
    console.log(listOfRestaurants, "listOfRestaurants");
    console.log(unChangedRestaurantList, "unChangedRestaurantList");
  };

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
