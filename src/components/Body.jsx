import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { waitFor } from "../utils/waitFor";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    await waitFor(1000);
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
    setRestaurantList(restaurants);
    setFilteredRestaurants(restaurants);
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
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Body;
