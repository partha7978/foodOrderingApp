import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCategory = (category) => {
    const [isActive, setIsActive] = useState(false);
  console.log(category, "categoryComponent");
  const { title, itemCards } = category.category;
  return (
    <div className="flex flex-col">
      <div className="restaurant__menu-items border-t-2 m-6 mt-0 p-4 flex justify-between items-start w-[50%] mx-auto bg-gray-100 rounded-lg" onClick={() => setIsActive(!isActive)}>
        <span className="text-lg font-semibold">{`${title} - [${itemCards.length}]`}</span>
        <span>{isActive ? "▲" : "▼"}</span>
      </div>
      {isActive && itemCards?.map((item) => (
        <div
          className="restaurant__menu-items border-t-2 m-6 my-0 p-4 flex justify-between items-start w-[50%] mx-auto"
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

export default RestaurantCategory;
