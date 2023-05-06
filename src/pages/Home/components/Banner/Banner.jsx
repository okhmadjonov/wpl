import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="blur"></div>
      <div className="banner">
        <div className="banner__container">
          <div className="banner__container-wrapper">
            <div className="banner__text">
              <h3 className="title">
                Next Event: April <br />
                20th, Live From <br />
                Myrtle Beach.
              </h3>
              <p className="subtitle">
                One Day. 36 Golfers. Four Rounds. Only One Champion!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
