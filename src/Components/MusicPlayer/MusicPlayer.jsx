import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './MusicPlayerStyle.css'
import ButtonBack from "../Back/ButtonBack";
import PlayerDisplay from "./PlayerDisplay";

const MusicPlayer = () => {

    const song = useRef(null);
    const [timeNow, setTimeNow] = useState(0);

    const dispatch = useDispatch();
    const finishUrlSong = useSelector(state => state.urlSong.urlSong);
    const play = (e) => {
        song.current.play();
    }

    const pause = (e) => {
        song.current.pause()
    }
    return (
        <div>
            <ButtonBack/>
            <audio ref={song} id="player" src={finishUrlSong}></audio>
            <PlayerDisplay song={song} play={play} pause={pause}/>
        </div>

    );
};

export default MusicPlayer;