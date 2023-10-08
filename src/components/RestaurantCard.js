import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { slaString },
    costForTwo,
  } = props?.resData;
  return (
    <div className="restaurant-card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="card image"
        className="card__image"
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐{avgRating}</p>
      <p>{slaString}</p>
      <p>{costForTwo}</p>
      <button>Order Now</button>
    </div>
  );
};

export default RestaurantCard;
