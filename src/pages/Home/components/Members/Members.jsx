import React from "react";
import "./Members.scss";
import katrek from "../../../../assets/images/katrek.png";
import kaz from "../../../../assets/images/kaz.png";
import rob from "../../../../assets/images/rob.png";
const Members = () => {
  return (
    <div className="members">
      <div className="members__container">
        <div className="cards">
          <div className="card">
            <div className="img_card">
              <img src={katrek} alt="Katrek" />
            </div>
            <div className="name_card">
              <p>BRIAN KATREK</p>
              <span>Tournament Commentator And Host Of PGA TOUR Radio</span>
            </div>
          </div>
          <div className="card">
            <div className="img_card">
              <img src={rob} alt="Rob" />
            </div>
            <div className="name_card">
              <p> ROB PIZZOLA</p>
              <span>Featured Guest</span>
            </div>
          </div>
          <div className="card">
            <div className="img_card">
              <img src={kaz} alt="Kaz" />
            </div>
            <div className="name_card">
              <p>KAZ BROWN</p>
              <span>On-Air Host From Pro League Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
