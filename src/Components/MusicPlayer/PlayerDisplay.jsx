import React, { useEffect, useRef, useState } from "react";
import "./PlayerDisplayStyle.css";
import { getTimeSong } from "../../function/getTime";

const PlayerDisplay = ({song, play, pause}) => {
    const [visionPlay, setVisionPlay] = useState(true);
    const [startTime, setStartTime] = useState(`00:00`);
    const [progressValue, setProgressValue] = useState(0);

    const moveProgress = (e) => {
        const value = e.target.value;
        const duration = song.current.duration;
        const currentTime = value * duration / 100;
        song.current.currentTime = currentTime;
        setProgressValue(value);
    };

    useEffect(() => {
        const handleTimeUpdate = () => {
            setStartTime(getTimeSong(song.current.currentTime));
            const progressPercent =
                (song.current.currentTime / song.current.duration) * 100;
            setProgressValue(progressPercent);
        };

        song.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            if(!song.current) return;
            song.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);
    const playA = (e) => {
        e.preventDefault();
        setVisionPlay(false);
        play();
    };

    const pauseA = (e) => {
        e.preventDefault();

        setVisionPlay(true);
        pause();
    };

    return (
        <div className={"player"}>
            {visionPlay ? (
                <button className={"playBtn"} onClick={playA}></button>
            ) : (
                <button className={"pauseBtn"} onClick={pauseA}></button>
            )}
            <input
                type="range"
                className="range"
                max="100"
                value={progressValue}
                onChange={moveProgress}
            />
            <div className={"time"}>{startTime}</div>
        </div>
    );
};

export default PlayerDisplay;