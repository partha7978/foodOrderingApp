import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const restaurantInfo = useRestaurantMenu(resId);
  console.log(restaurantInfo, "restaurantInfo");

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, totalRatingsString, areaName } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards, "itemCards");

  const categories =
    restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories, "categories");

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
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category.card.card}
          showItems={showIndex === index ? true : false}
          index={index}
          setShowIndex={setShowIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
