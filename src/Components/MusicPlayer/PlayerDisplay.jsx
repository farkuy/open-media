import React, { useEffect, useState } from "react";
import "./PlayerDisplayStyle.css";
import { getTimeSong } from "../../function/getTime";
import {useDispatch} from "react-redux";
import Loader from "../Loader/Loader";

const PlayerDisplay = ({song, play, pause}) => {
    const dispatch = useDispatch();

    const [visionPlay, setVisionPlay] = useState(true);
    const [startTime, setStartTime] = useState(`00:00`);
    const [progressValue, setProgressValue] = useState(0);
    const [volume, setVolume] = useState(0.5)
    const moveProgress = async (e) => {
        if (Number.isFinite(song.current.duration)) {
            const value = e.target.value;
            const duration = song.current.duration;
            const currentTime = value * duration / 100;
            song.current.currentTime = currentTime;
            setProgressValue(value);
        }
        else {
            alert(`Радиостанцию нельзя перемотать`)
        }
    };
    const volumeCorrect = async (e) => {
        const value = e.target.value;
        song.current.volume = value;
        await setVolume(value)
    }

    useEffect((e) => {
        if (Number.isFinite(song.current.duration)) {
            const handleTimeUpdate = () => {
                try {
                    setStartTime(getTimeSong(song.current.currentTime));
                    const progressPercent =
                        (song.current.currentTime / song.current.duration) * 100;
                    setProgressValue(progressPercent);
                }
                catch (e) {
                    return
                }
            };

            song.current.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                if(!song.current) {
                    dispatch({type: 'ADD_VISIBLE', payload: true});
                    return;
                }
                song.current.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
        else if(!Number.isFinite(song.current.duration)) {
            const automaticallyTimeUpdate = () => {
                try {
                    setStartTime(getTimeSong(song.current.currentTime));
                    setProgressValue(100)
                } catch (e) {
                    return
                }
            };

            song.current.addEventListener("timeupdate", automaticallyTimeUpdate);

            return () => {
                if (!song.current) {
                    dispatch({type: 'ADD_VISIBLE', payload: true});
                    return;
                }
                song.current.removeEventListener("timeupdate", automaticallyTimeUpdate);
            };
        }
    }, );
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
                <input
                    type="range"
                    className="volume"
                    max="1"
                    value={volume}
                    step="0.01"
                    onChange={volumeCorrect}
                />
                <div className={"time"}>{startTime}</div>
            </div>
    );
};

export default PlayerDisplay;