import { MEDIA_ASSEET_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card">
      <img
        src={MEDIA_ASSEET_URL + restaurant.info.cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{restaurant.info.name}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
      <h4>{restaurant.info.costForTwo}</h4>
      <h4>{restaurant.info.avgRatingString}</h4>
      <h4>{restaurant.info.sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;

export const withTopRatedLabel = (RestaurantCard) => {
  return ({ restaurant }) => {
    return (
      <div>
        <label>Top Rated</label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
};
