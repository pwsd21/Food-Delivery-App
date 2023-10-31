import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-48" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex p-4 m-4">
        <ul className="flex p-4 m-4 font-semibold">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">{"🛒"}Cart</li>
          <div>
            <button
              className="px-4 mb-4"
              onClick={() => {
                loginBtn === "login"
                  ? setLoginBtn("logout")
                  : setLoginBtn("login");
              }}
            >
              {loginBtn}
            </button>
          </div>
          <li className="px-4 font-bold">
            {"👤"}
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
