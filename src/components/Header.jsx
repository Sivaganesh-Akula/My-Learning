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
    <div className="flex bg-slate-100 justify-between p-2 shadow-gray-600 shadow-md">
      <div>
        <Link to="/">
          <img
            className="w-12 h-12 rounded-full inline"
            src={APP_LOGO}
            alt="App Logo"
          />
          <span className="italic font-semibold inline text-2xl align-middle pl-1">
            Fair Food
          </span>
        </Link>
      </div>
      <div className="flex">
        <ul className="flex pr-3 pt-3">
          <li className="pl-3">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="pl-3">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pl-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pl-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pl-3">Cart</li>
        </ul>
        <button
          className="bg-blue-600 px-6 rounded-lg h-8 mt-2 text-white hover:bg-slate-100 hover:text-blue-600 border border-blue-600"
          onClick={handleLoginClick}
        >
          {loginText}
        </button>
      </div>
    </div>
  );
};
export default Header;
