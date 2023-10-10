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
      <div className="card__textContent">
        <div>
          <h3 className="card__name">{name}</h3>
          <p className="card__cuisines">{cuisines?.splice(0, 4).join(", ")}</p>
        </div>
        <div className="card__rating-container">
          {" "}
          <p className="card__rating">⭐{avgRating}</p>
          <p className="card__time">{slaString}</p>
        </div>
        <p className="card__cost">{costForTwo}</p>
      </div>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantCard;
