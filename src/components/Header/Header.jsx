import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-wrapper">
          <div className="logo">
            <Link>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu">
            <Link>HOME</Link>
            <Link>WPL EVENT #2, 4/20</Link>
            <Link>PLAYERS</Link>
            <Link>PAST RESULTS</Link>
            <Link>
              <button>LIVE STREAM</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
