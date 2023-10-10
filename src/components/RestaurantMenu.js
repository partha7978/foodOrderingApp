import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9298689&lng=77.6848366&restaurantId=229837&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurantInfo(jsonData?.data?.cards[0]?.card?.card?.info);
    console.log(jsonData, "jsonDataMENU");
    console.log(restaurantInfo, "restaurantInfo");
  };

  const {name, cuisines, avgRatingString, totalRatingsString, areaName} = restaurantInfo;

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant__menu-container">
        <div className="restaurant__menu-top">
            <div className="restaurant__menu-heading">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
            </div>
            <div className="ratingAndCuisine__section">
                <p>⭐{avgRatingString}</p>
                <span>{totalRatingsString}</span>
            </div>
        </div>
        <div className="locationAndTime__section">
            <p>{areaName}</p>
        </div>

    </div>
  );
};

export default RestaurantMenu;
