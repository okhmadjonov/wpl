import c from "./Video.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useRef, useState } from "react";
import Video from "../../../../assets/video/home_vid.mp4";

const VideoWrapper = () => {
  const [isplay, setisplay] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className={c.videoBlock}>
      <video
        ref={audioRef}
        controls={isplay}
        onPlay={() => setisplay((prev) => true)}
        onPause={() => setisplay((prev) => false)}
        className={c.video}
        src={Video}></video>
      {!isplay && (
        <div className={c.playVideoWrapper} onClick={handleClick}>
          <div className={c.playVideoCircle}></div>
          <BsFillPlayFill className={c.playVideoBtn} />
        </div>
      )}
    </div>
  );
};

export default VideoWrapper;
