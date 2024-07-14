import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { waitFor } from "../utils/waitFor";
import { MENU_ITEMS } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState(null);
  const [info, setInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenuData = async () => {
    await waitFor(500);
    const data = await fetch(MENU_ITEMS + resId);
    const jsonData = await data.json();
    const infoData = jsonData.data.cards.find((card) =>
      card?.card?.card?.hasOwnProperty("info")
    );
    const { info } = infoData.card.card;
    const itemCard = jsonData.data.cards.find((card) =>
      card.hasOwnProperty("groupedCard")
    );
    const menuData = itemCard.groupedCard.cardGroupMap.REGULAR.cards.find(
      (recomended) =>
        recomended.card.card.type === "CATEGORY_TYPE_RECOMMENDED" ||
        recomended.card.card.hasOwnProperty("categories")
    );
    const { itemCards } = menuData.card.card.hasOwnProperty("categories")
      ? menuData.card.card.categories[0]
      : menuData.card.card;
    setMenuList(itemCards);
    setInfo(info);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (!menuList || !info) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu">
      <h1>{info.name}</h1>
      <p>{info.costForTwoMessage + " - " + info.avgRatingString}</p>
      <ul>
        {menuList.map((item) => {
          return (
            <li key={item.card.info.id}>
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
