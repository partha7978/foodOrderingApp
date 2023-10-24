import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
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
    <div className="w-full">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-md font-semibold">{cuisines?.join(", ")}</p>
        </div>
        <div className="flex flex-row py-2 px-8 m-2 bg-pink-100 rounded-lg">
          <p className="text-md mx-2 font-semibold">{areaName}</p>
          <p className="text-md mx-2 font-semibold">⭐{avgRatingString}</p>
          <span className="text-md mx-2 font-semibold">
            {totalRatingsString}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-row">
        <button className="px-4 py-1 m-2 border-green-700 border-[1px] rounded-md bg-green-50 text-sm">
          Veg Only
        </button>
        <button className="px-4 py-1 m-2 border-pink-700 border-[1px] rounded-md bg-pink-100 text-sm">
          Clear
        </button>
      </div>
      {itemCards.map((item) => (
        <div
          className="restaurant__menu-items border-t-2 m-6 p-4 flex justify-between items-start w-[50%] mx-auto"
          key={item?.card.info.id}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start flex-col justify-center">
              <div className="flex items-center justify-center">
                <span className="text-sm mr-2">
                  {item?.card?.info?.isVeg ? "🟢" : "🔴"}
                </span>
                {parseFloat(
                  item?.card?.info?.ratings?.aggregatedRating?.rating
                ) >= parseFloat(4.5) && (
                  <span className="text-sm px-2 py-[2px] font-semibold text-yellow-600 bg-yellow-100 rounded-s-lg border-yellow-500 rounded-xl">
                    Best Selling
                  </span>
                )}
              </div>
              <span className="text-xl font-semibold">
                {item?.card?.info?.name}
              </span>
            </div>
            <span className="text-md font-normal">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <span className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </span>
            <span className="text-sm font-medium text-gray-600">
              ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}
            </span>
          </div>
          <div className="flex justify-center items-center flex-col">
            {" "}
            <img
              src={`${CDN_URL}${item?.card?.info?.imageId}`}
              alt="card image"
              className="w-36 h-32 rounded-lg"
            />
            <button className="px-4 py-1 m-2 border-black border-[1px] rounded-md bg-black-50 text-sm transition-all ease-in-out duration-200 hover:scale-105">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
