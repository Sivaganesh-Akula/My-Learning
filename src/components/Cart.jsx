import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-8/12 mx-auto">
      <div className="flex my-2 mx-5 justify-between">
        <div className="font-bold text-lg">Cart</div>
        <button
          onClick={handleClick}
          className="px-5 bg-green-600 rounded text-white"
        >
          Clear Cart
        </button>
      </div>

      <div>
        {cartItems.length === 0 ? (
          <div className="text-center mt-52">
            <div className="text-2xl font-bold">
              Card is empty try adding some items
            </div>
            <Link to="/" className="text-blue-500 text-xl">
              Explore your favourite dishes
            </Link>
          </div>
        ) : (
          <RestaurantItemList items={cartItems} cart={true} />
        )}
      </div>
    </div>
  );
};
export default Cart;
