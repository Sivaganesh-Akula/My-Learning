import { useEffect, useState, useRef, useCallback } from "react";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {
  SWIGGY_RESTAURANT_DATA,
  SWIGGY_RESTAURANT_LIST_UPDATE,
} from "../utils/constants";
import { UPDATE_REQ_PAYLOAD } from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  if (restaurantList.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="app-body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              name="search"
              id="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          <div>
            <button className="btn" onClick={handleTopRatedResClick}>
              Top Rated Restaurants
            </button>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="res-container">
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
                <RestaurantCard restaurant={restaurant} />
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
