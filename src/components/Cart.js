import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5 ">
      <h1 className="font-bold text-3xl">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg text-xs"
        >
          Clear Cart
        </button>
        {cartItems == 0 && (
          <h6>
            Carty is Empty
            <Link to="/" className="text-orange-600">
              {"   "}Add Items to the Cart.
            </Link>
          </h6>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
