import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import ResCardWrapper from "./wrapper/ResCardWrapper";
import UserContext from "../utils/UserContext";

import { RoundedCarousel } from "./carousel";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const unChangedRestaurantList = useRestaurantData();
  const { setUserName, loggedInUser } = useContext(UserContext);

  const RestaurantCardPromoted = ResCardWrapper(RestaurantCard);

  useEffect(() => {
    console.log(listOfRestaurants.length, "listOfRestaurants");
    setListOfRestaurants(unChangedRestaurantList);
    console.log(listOfRestaurants, "listOfRestaurants");
  }, [unChangedRestaurantList]);

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
      <RoundedCarousel />
      <div className="search-bar">
        <div className="search flex justify-center items-center m-4 p-2">
          <input
            className="px-3 py-2 w-96 mx-4 border border-solid border-black rounded-lg"
            type="text"
            placeholder="Search for a restaurant"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-4 px-8 py-2 bg-gray-950 text-white rounded-lg cursor-pointer transition-all: ease-in duration-200  hover:scale-105"
            onClick={() => handleSearchFilter()}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="mx-4 px-4 py-1 rounded-xl text-xs bg-gray-950 text-white cursor-pointer transition-all: ease-in duration-200  hover:scale-105"
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className="mx-4 px-4 py-1 rounded-xl text-xs bg-gray-950 text-white cursor-pointer transition-all: ease-in duration-200  hover:scale-105"
            onClick={() => {
              handleFilter("top");
            }}
          >
            Top Rated
          </button>
          <button
            className="mx-4 px-4 py-1 rounded-xl text-xs bg-gray-950 text-white cursor-pointer transition-all: ease-in duration-200  hover:scale-105"
            onClick={() => handleFilter("clear")}
          >
            Clear
          </button>
          <div>
            <input
              className="px-3 py-2 w-36 mx-4 border border-solid border-black rounded-lg transition-all: ease-in duration-200  hover:scale-105"
              type="text"
              placeholder="Enter username"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {listOfRestaurants.map((restaurant) =>
          restaurant?.info?.promoted ? (
            <RestaurantCardPromoted
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ) : (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
