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
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="login__btn" onClick={() =>handleLoginBtn()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;