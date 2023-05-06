import React from "react";
import "./Recap.scss";
import Video from "./Video";
const Recap = () => {
  return (
    <div className="recap">
      <div className="recap__container">
        <div className="recap__container-wrapper">
          <div className="recap_title">
            <p>Recap Of World Putting League Event</p>
          </div>
          <div className="recap_vid">
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recap;
