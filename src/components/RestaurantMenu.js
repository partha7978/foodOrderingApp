import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  console.log(restaurantInfo, "restaurantInfo");

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, totalRatingsString, areaName } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="restaurant__menu-container">
      <div className="restaurant__menu-top">
        <div className="restaurant__menu-heading">
          <h1>{name}</h1>
          <p>{cuisines?.join(", ")}</p>
        </div>
        <div className="ratingAndCuisine__section">
          <p>⭐{avgRatingString}</p>
          <span>{totalRatingsString}</span>
        </div>
        <div className="locationAndTime__section">
          <p>{areaName}</p>
        </div>
      </div>
      <div>
        <p>Menu</p>
      </div>
      {itemCards.map((item) => (
        <div className="restaurant__menu-items" key={item?.card.info.id}>
          <span>{item?.card?.info?.name}</span>
          <div className="price_section">
            <span>
              Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <span>⭐{item?.card?.info?.ratings?.aggregateRating?.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
