import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const { loggedInUser } = useContext(UserContext);

  const handleLoginBtn = () => {
    btnName === "login" ? setBtnName("logout") : setBtnName("login");
    console.log(btnName);
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between p-4 ">
      <div className="logo-container flex justify-center items-center">
        <img className="w-6 h-8" src={LOGO_URL} />
        <h1 className="text-2xl font-bold text-[#FC8019] ml-2">Swiggy</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 items-center font-[500]">
          <li className="px-2">
            <Link className="font-[500]" to="/">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-[500]" to="/about">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-[500]" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-[500]" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-[500] flex items-center flex-row" to="/cart">
              <FiShoppingCart className="mr-1" /> Cart {cartItems.length}
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-[500]" to="/cart">
              {loggedInUser}
            </Link>
          </li>
          <button
            className="px-6 py-2 bg-gray-950 text-white rounded-lg"
            onClick={() => handleLoginBtn()}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
