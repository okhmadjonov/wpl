import React from "react";
import ReactPlayer from "react-player";
import tee from "../../assets/images/TeeTimes_42023.png";
import "./Event.scss";
import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <div className="Event__page">
      <div className="blur1"></div>
      <div className="Event__container">
        <div className="back_image">
          <h1>Event 2 4/20</h1>
        </div>
        <div className="Wrapper">
          <div className="wrap__container">
            <div className="List__part">
              <div className="List">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRIwgo4-mP5c7D24Ak4GKUwtTTY_2TU6NahUEkJDizoK0WbgCmDRm3ZvFXy_Gov4pSW_kR4qVgbcyBQ/pubhtml?gid=227718704&amp;single=true&amp;widget=true&amp;headers=false"
                  width="100%"
                  height="100%"></iframe>
              </div>
            </div>
            <div className="aboutpart">
              <div className="videowrap">
                <div className="videopart">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url="https://www.youtube.com/embed/_FO1wLJzCQQ"
                  />
                </div>
                <div className="txtpart">
                  <h2>Format and schedule of play:</h2>
                  <ul>
                    <li className="tee__section-point">
                      There will be a field of 36 golfers, playing through 4
                      total rounds. Each group will feature three golfers. There
                      will be a cut after each round and scores will not carry
                      over from round to round.
                    </li>
                    <li className="tee__section-point">
                      The field after each round will be cut to: top 24, top 12,
                      top 6, WPL champion
                    </li>
                    <li className="tee__section-point">
                      The first flight of golfers will tee off at 10:30am EST on
                      April 20th and we expect the event to conclude around
                      3:30pm
                    </li>
                  </ul>
                  <h2 className="tee__section-title">Other things to note:</h2>
                  <ul>
                    <li className="tee__section-point">
                      The course played will be the Hawaiian Rumble
                    </li>
                    <li className="tee__section-point">
                      All players’ scores will be kept by their opponent and
                      verified by a resident scorekeeper on the course
                    </li>
                    <li className="tee__section-point">
                      First place prize will be $5,000. Amateur players are not
                      eligible for tournament prize money and will not be
                      declared the winner if they obtain the best score at the
                      event. Rather, the declared winner and the prize money
                      will go to the professional with the next best score. For
                      reference, amatuers are listed below with a "(A)"
                      designation.
                    </li>
                    <li className="tee__section-point">
                      The event is sanctioned by the USPMGA, and{" "}
                      <a
                        href="https://prominigolf.com/wp-content/uploads/2021/04/Members-Rulebook1.pdf"
                        target="_blank">
                        all rules in force can be reviewed here
                      </a>
                      .{" "}
                    </li>
                    <li className="tee__section-point">
                      All players in the field are required to abide by and sign
                      an anti-doping and anti-wagering contract
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="imagepart">
              <div className="imgcontainer">
                <img src={tee} alt="tee" />
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
