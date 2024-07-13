import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img className="app-logo" src={APP_LOGO} alt="App Logo" />
        <span className="app-name">Fair Food</span>
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default Header;
