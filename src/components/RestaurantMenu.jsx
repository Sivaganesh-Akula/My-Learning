import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { itemCards } from "../utils/mockData";
import { waitFor } from "../utils/waitFor";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams();

  const fetchMenuData = async () => {
    await waitFor(500);
    setMenuList(itemCards);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (!menuList) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu">
      <h1>Name of the restaurant</h1>
      <p>Additionl sinlge line info</p>
      <ul>
        {menuList.map((item) => {
          return (
            <li>
              {item.card.info.name +
                " - " +
                item.card.info.category +
                " - " +
                "Rs " +
                (item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100) +
                "/-"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
