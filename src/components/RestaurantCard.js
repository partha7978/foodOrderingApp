import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const {
    name,
    id,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { slaString },
    costForTwo,
  } = props?.resData;
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="flex flex-col p-2 m-4 justify-start gap-4 items-start w-64 h-auto rounded-xl hover:scale-95 duration-300 transition-all: ease-in-out">
        <div className="flex justify-start items-start flex-col w-full">
          <img
            src={`${CDN_URL}${cloudinaryImageId}`}
            alt="card image"
            className="w-full h-40 rounded-lg"
          />
          <div className="w-full">
            <div>
              <h3 className="text-lg font-semibold">
                {name.length > 25 ? `${name.slice(0, 25)}...` : name}
              </h3>
              <p className="text-sm">{cuisines.length > 2 ? `${cuisines?.splice(0, 3).join(", ")}...` : cuisines}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="card__rating">⭐{avgRating}</p>
              <p className="card__time">{slaString}</p>
            </div>
            <p className="my-2">{costForTwo}</p>
          </div>
        </div>
{/* 
        <button className="px-8 py-2 w-full bg-gray-950 text-white rounded-lg cursor-pointer transition-all: ease-in-out duration-500 hover:scale-105">
          Order Now
        </button> */}
      </div>
    </Link>
  );
};

export default RestaurantCard;
