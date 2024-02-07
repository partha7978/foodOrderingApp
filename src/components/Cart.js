import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const {resName} = useSelector((store) => store.cart.resName);

  const handleRemoveFromCart = (id) => {
    const cartItem = cartItems.filter((item) => item.item.card.info.id === id);
    dispatch(removeItem(cartItem));
  };
console.log(cartItems, "cartItems");
  return (
    <div className="w-full h-full flex justify-center items-center">
      {cartItems.length === 0 ? (
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
      ) : (
        <div className="w-[60%] flex justify-center items-center flex-col">
          <h1 className="text-3xl mx-2 my-5">Your Cart</h1>
          <div className="w-full flex flex-col">
            {cartItems?.map(
              (
                {
                  item: {
                    card: {
                      info: { name, id, imageId, price, isVeg },
                    },
                  }
                },
                index
              ) => (
                <div
                  key={id + index}
                  className="flex flex-row bg-neutral-100 rounded-lg m-2 p-2 justify-between w-full"
                >
                  <div className="flex flex-row w-[70%] justify-between">
                    <div className="flex flex-row items-center">
                      <img
                        src={`${CDN_URL}${imageId}`}
                        className="w-20 h-auto mx-2 rounded-[5px]"
                      />
                      <div className="flex flex-col">
                        <span className="flex items-center mx-2 text-[10px]">From {resName}</span>
                        <span className="flex items-center mx-2 font-medium">{name}</span>
                        <span
                          className={`flex items-center mx-2 font-medium text-[10px] ${
                            isVeg ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {isVeg ? "Veg" : "Non-Veg"}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center mx-2 font-medium">
                      {price / 100}Rs.
                    </span>
                  </div>
                  <div className="flex justify-end items-center w-[30%] mx-2">
                    <button
                      className="px-3 py-1 bg-gray-950 text-white rounded-[5px] cursor-pointer transition-all: ease-in duration-200  hover:scale-105"
                      onClick={() => handleRemoveFromCart(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col my-8">
            <div className="my-2 font-medium">
              Total Price:{" "}
              {cartItems?.reduce(
                (acc, curr) => acc + curr.item.card.info.price / 100,
                0
              )}
              Rs.
            </div>
            <button className="px-4 py-2 bg-gray-950 text-white rounded-[5px] cursor-pointer transition-all: ease-in duration-200  hover:scale-105">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
