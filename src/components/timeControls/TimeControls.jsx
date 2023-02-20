import React from "react";

const TimeControls = ({
  currTime,
  time,
  duration,
  seconds,
  handleTimeBar,
  sound,
}) => {
  return (
    <div>
      <div className="my-0 mx-auto w-[80%] flex justify-between text-[#828282] text-sm">
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <p>
          {time.min}:{time.sec}
        </p>
      </div>

      {sound && (
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="w-[80%] bg-[#27ae60]"
          onChange={handleTimeBar}
        />
      )}
    </div>
  );
};

export default TimeControls;
