import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

  const [btnName, setBtnName] = useState("login");

  const handleLoginBtn = () => {
    btnName === "login" ? setBtnName("logout") : setBtnName("login");
    console.log(btnName)
  }

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 bg-purple-50">
      <div className="logo-container">
        <img
          className="w-16 h-16"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 items-center">
          <li className="px-2 font-medium">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2"><Link className="font-light" to="/">Home</Link></li>
          <li className="px-2"><Link className="font-light" to="/about">About</Link></li>
          <li className="px-2"><Link className="font-light" to="/contact">Contact</Link></li>
          <li className="px-2"><Link className="font-light" to="/grocery">Grocery</Link></li>
          <li className="px-2"><Link className="font-light" to="/cart">Cart</Link></li>
          <button className="px-6 py-2 bg-gray-950 text-white rounded-lg" onClick={() =>handleLoginBtn()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;