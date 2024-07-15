import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { waitFor } from "../utils/waitFor";
import { MENU_ITEMS } from "../utils/constants";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState(null);
  const [info, setInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

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
    const menuData = itemCard.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (recomended) =>
        recomended.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setMenuList(menuData);
    setInfo(info);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (!menuList || !info) {
    return <Shimmer />;
  }

  return (
    <div className="mt-5 mx-auto w-[550px]">
      <div className="m-2">
        <h1 className="font-semibold text-xl">{info.name}</h1>
        <p className="text-sm">
          {`⭐️ ${info.avgRatingString} (${info.totalRatingsString}) - ${info.costForTwoMessage}`}
        </p>
      </div>
      <div className="mt-3">
        {menuList.map((menuItemCategory, index) => {
          return (
            <RestaurantCategoryList
              key={menuItemCategory.card.card.title}
              menuItemCategory={menuItemCategory.card.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                index === showIndex ? setShowIndex(null) : setShowIndex(index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
