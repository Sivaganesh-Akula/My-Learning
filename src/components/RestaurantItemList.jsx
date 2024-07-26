import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import { DEFAULT_DISH_IMG, MEDIA_ASSEET_URL } from "../utils/constants";

// TODO: Handle card logic gracefully
const RestaurantItemList = ({ items, cart }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    cart ? dispatch(removeItem(item)) : dispatch(addItem(item));
  };
  return (
    <div className="m-2">
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-between bg-gray-100 hover:bg-gray-200 mb-2 px-2 shadow-md"
          >
            <div className="w-3/4">
              <div className="italic font-semibold">{item.card.info.name}</div>
              <div className="font-semibold text-sm">
                {"Rs " +
                  (item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100) +
                  "/-"}
              </div>
              <div className="text-sm">
                ⭐️ {item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCount})
              </div>
              <p className="text-xs text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-1/4 m-1 p-1 relative">
              <button
                onClick={() => handleClick(item)}
                className="absolute bg-white px-5 text-green-600 rounded-sm shadow-md opacity-85 mx-auto bottom-0 right-[16%]"
              >
                {cart ? "Remove" : "Add"}
              </button>
              {item.card.info.imageId ? (
                <img
                  className="w-28 h-28 object-cover shadow-md rounded-md float-right"
                  src={MEDIA_ASSEET_URL + item.card.info.imageId}
                  alt="dish"
                />
              ) : (
                <img
                  className="w-28 h-28 object-cover shadow-md rounded-md float-right"
                  src={DEFAULT_DISH_IMG}
                  alt="dish"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantItemList;
