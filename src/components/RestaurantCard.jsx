import { MEDIA_ASSEET_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-slate-200 hover:bg-slate-300 w-[200px] rounded m-2 p-3">
      <img
        src={MEDIA_ASSEET_URL + restaurant.info.cloudinaryImageId}
        alt="res-logo"
        className="w-[180px] h-[180px] rounded object-cover"
      />
      <h3 className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {restaurant.info.name}
      </h3>
      <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {restaurant.info.cuisines.join(", ")}
      </h4>
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
        <label className="absolute bg-gray-700 text-white rounded opacity-70 px-1 text-sm">
          Top Rated
        </label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
};
