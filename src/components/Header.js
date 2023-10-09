import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {

  const [btnName, setBtnName] = useState("login");

  const handleLoginBtn = () => {
    btnName === "login" ? setBtnName("logout") : setBtnName("login");
    console.log(btnName)
  }

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login__btn" onClick={() =>handleLoginBtn()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;