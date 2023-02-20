import React from "react";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

const MusicControls = ({ isPlaying, playingButton }) => {
  return (
    <div>
      <button className="bg-none border-0 items-center justify-center">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>
      {!isPlaying ? (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
      ) : (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
      )}
      <button className="bg-none border-0 items-center justify-center">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          <BiSkipNext />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default MusicControls;
