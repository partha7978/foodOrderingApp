import { LOGO_URL } from "../utils/constants";

export const Header = () => {
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
          <button className="login__btn">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;