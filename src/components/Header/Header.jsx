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
            <Link className="menu__link">HOME</Link>
            <Link to={'/Event'} className="menu__link">WPL EVENT #2, 4/20</Link>
            <Link className="menu__link">PLAYERS</Link>
            <Link className="menu__link">PAST RESULTS</Link>
            <Link className="menu__link live-stream">
              <button>LIVE STREAM</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
