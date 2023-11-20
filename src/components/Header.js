import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const { loggedInUser } = useContext(UserContext);

  const handleLoginBtn = () => {
    btnName === "login" ? setBtnName("logout") : setBtnName("login");
    console.log(btnName);
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 ">
      <div className="logo-container flex justify-center items-center">
        <img className="w-6 h-8" src={LOGO_URL} />
        <h1 className="text-2xl font-bold text-[#FC8019] ml-2">Swiggy Clone</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 items-center">
          <li className="px-2 font-medium">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-2">
            <Link className="font-light" to="/">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-light" to="/about">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-light" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-light" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-2">
            <Link className="font-light" to="/cart">
              Cart
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
