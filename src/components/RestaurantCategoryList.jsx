import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategoryList = ({
  menuItemCategory,
  showItems,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-between bg-gray-100 m-2 p-3 shadow-md cursor-pointer"
      >
        <div>{`${menuItemCategory.title} (${menuItemCategory.itemCards.length})`}</div>
        {!showItems ? <div>➡️</div> : <div>⬇️</div>}
      </div>
      {showItems && <RestaurantItemList items={menuItemCategory.itemCards} />}
    </div>
  );
};
export default RestaurantCategoryList;
