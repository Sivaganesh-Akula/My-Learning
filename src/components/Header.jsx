import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import useOnline from "../hooks/useOnline";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const isOnline = useOnline();

  const handleLoginClick = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="app-logo" src={APP_LOGO} alt="App Logo" />
          <span className="app-name">Fair Food</span>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button className="login btn" onClick={handleLoginClick}>
          {loginText}
        </button>
      </div>
    </div>
  );
};
export default Header;
