import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import debussy from "../../assets/music/Claire_De_Luna.mp3";
import SongDetails from "../../components/songDetails/SongDetails.jsx";
import TimeControls from "../../components/timeControls/TimeControls.jsx";
import MusicControls from "../../components/musicControls/MusicControls.jsx";

const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(debussy);
  const [seconds, setSeconds] = useState(0);

  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec - min * 60);
    const time = {
      min: min,
      sec: secRemain,
    };
    setTime(time);
  }, [sound]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const handleTimeBar = (e) => {
    if (sound) sound.seek([Number(e.target.value)]);
  };

  return (
    <div className=" bg-white h-[150px] pr-[40%] flex items-center justify-between gap-2 p-[2em] font-sans text-center">
      <SongDetails />

      <TimeControls
        currTime={currTime}
        time={time}
        seconds={seconds}
        handleTimeBar={handleTimeBar}
        sound={sound}
        duration={duration}
      />
      <MusicControls isPlaying={isPlaying} playingButton={playingButton} />
    </div>
  );
};

export default SongPlayer;