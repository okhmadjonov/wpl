import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import "./Header.scss";

const Header = () => {

  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu">
            <Link to="/" className="menu__link">
              HOME
            </Link>
            <Link to={"/Event"} className="menu__link">
              WPL EVENT #2, 4/20
            </Link>
            <Link to={'/Players'} className="menu__link">PLAYERS</Link>
            <Link className="menu__link">PAST RESULTS</Link>
            <Link className="menu__link">
              <div className="live_stream">LIVE STREAM</div>
            </Link>
          </div>
          <div className="burgermenu" >
            <AiOutlineMenu onClick={handleClick} style={{display: isShown ? 'block' : 'none'}}/>
            <AiOutlineClose onClick={handleClick} style={{display: isShown ? 'none' : 'block'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
