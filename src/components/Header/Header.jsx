import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import "./Header.scss";
const Header = () => {

  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const [count, setCount] = useState(1);

  let step1 = false,
    step2 = false,
    step3 = false,
    step4 = false,
    step5 = false;

  switch (count) {
    case 1:
      step1 = true;
      break;
    case 2:
      step2 = true;
      break;
    case 3:
      step3 = true;
      break;
    case 4:
      step4 = true;
      break;
    case 5:
      step5 = true;
      break;

    default:
      step1 = true;
  }

  return (


    <>
      <div className="header">
        <div className="header__container">
          <div className="header__container-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="menu">
              <Link
                to="/"
                className={step1 ? "active" : "menu__link"}
                onClick={() => setCount(1)}>
                HOME
              </Link>
              <Link
                to={"/Event"}
                className={step2 ? "active" : "menu__link"}
                onClick={() => setCount(2)}>
                WPL EVENT #2, 4/20
              </Link>
              <Link
                to={"/Players"}
                className={step3 ? "active" : "menu__link"}
                onClick={() => setCount(3)}>
                PLAYERS
              </Link>
              <Link
                className={step4 ? "active" : "menu__link"}
                onClick={() => setCount(4)}>
                PAST RESULTS
              </Link>
              <Link
                className={step5 ? "active" : "menu__link"}
                onClick={() => setCount(5)}>
                <div className="live_stream">LIVE STREAM</div>
              </Link>
            </div>
            <div className="burgermenu" >
              <AiOutlineMenu onClick={handleClick} style={{display: isShown ? 'block' : 'none', color: '#FFFFFF', fontSize: '2rem'}}/>
              <AiOutlineClose onClick={handleClick} style={{display: isShown ? 'none' : 'block', color: '#FFFFFF', fontSize: '2rem'}}/> 
            </div>

          </div>
        </div>
      </div>    
    </>

  );
};

export default Header;
