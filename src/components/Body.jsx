import { useEffect, useState, useRef, useCallback, useContext } from "react";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {
  SWIGGY_RESTAURANT_DATA,
  SWIGGY_RESTAURANT_LIST_UPDATE,
} from "../utils/constants";
import { UPDATE_REQ_PAYLOAD } from "../utils/mockData";
import UserContext from "../contexts/UserContext";

const TopRatedRestaurantCard = withTopRatedLabel(RestaurantCard);

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [loggedInUserName, setLoggedInUserName] = useState(loggedInUser || "");

  // const observer = useRef();
  // const lastResCardRef = (node) => {
  //   if (observer.current) {
  //     observer.current.disconnect();
  //   }
  //   observer.current = new IntersectionObserver(async (entries) => {
  //     if (entries[0].isIntersecting) {
  //       const data = await fetch(SWIGGY_RESTAURANT_LIST_UPDATE, {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(UPDATE_REQ_PAYLOAD),
  //       });
  //       jsonData = await data.json();
  //     }
  //   });
  //   if (node) {
  //     observer.current.observe(node);
  //   }
  // };

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_DATA);
    const jsonData = await data.json();
    const card = jsonData.data.cards.find(
      (card) => card.card.card.id === "restaurant_grid_listing"
    );
    const { restaurants } = card.card.card.gridElements.infoWithStyle;
    setRestaurantList(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTopRatedResClick = () => {
    setFilteredRestaurants(
      restaurantList.filter(
        (restaurant) =>
          restaurant.info.avgRatingString > 4.2 &&
          restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleReset = () => {
    setFilteredRestaurants(restaurantList);
    setSearchTerm("");
  };

  const handleSearchChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSearchClick = () => {
    setFilteredRestaurants(
      restaurantList.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleUpdateUsernameClick = () => {
    setUserName(loggedInUserName);
  };

  const handleUsernameChange = (evt) => {
    setLoggedInUserName(evt.target.value);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="m-2">
              <input
                type="text"
                name="search"
                placeholder="My favourite hotel"
                className="border border-gray-500 rounded ml-2"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className="ml-2 px-5 bg-green-600 rounded text-white"
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>
            <div className="mt-2">
              <button
                className="bg-green-600 rounded px-2 mr-2 text-white"
                onClick={handleTopRatedResClick}
              >
                Top Rated
              </button>
              <button
                className="bg-green-600 rounded px-5 text-white"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="m-2">
            <input
              type="text"
              name="search"
              placeholder="username"
              className="border border-gray-500 rounded ml-2"
              value={loggedInUserName}
              onChange={handleUsernameChange}
            />
            <button
              className="ml-2 px-5 bg-green-600 rounded text-white"
              onClick={handleUpdateUsernameClick}
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mt-2">
          {filteredRestaurants.map((restaurant, index) => {
            // return
            // filteredRestaurants.length === index + 1 ? (
            //   <Link
            //     ref={lastResCardRef}
            //     key={restaurant.info.id}
            //     to={"/restaurant/" + restaurant.info.id}
            //   >
            //     <RestaurantCard restaurant={restaurant} />
            //   </Link>
            // ) : (
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                {restaurant.info.avgRatingString > 4.2 &&
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ? (
                  <TopRatedRestaurantCard restaurant={restaurant} />
                ) : (
                  <RestaurantCard restaurant={restaurant} />
                )}
              </Link>
            );
            // );
          })}
        </div>
      </div>
    );
  }
};
export default Body;
