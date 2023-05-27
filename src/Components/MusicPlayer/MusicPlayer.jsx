import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import './MusicPlayerStyle.css'
import ButtonBack from "../Back/ButtonBack";
import PlayerDisplay from "./PlayerDisplay";
import Loader from "../Loader/Loader";

const MusicPlayer = () => {

    const song = useRef(null);


    const finishUrlSong = useSelector(state => state.urlSong.urlSong);
    const [songLoaded, setSongLoaded] = useState(false);

    useEffect(() => {
        if (song.current.readyState >= 3) {
            setSongLoaded(true);
        }
    }, [finishUrlSong]);

    const play = async (e) => {
        song.current.play();
    }
    const pause = async (e) => {
        song.current.pause()
    }

    return (
        <div className={`centerR`}>
            <ButtonBack song={song} pause={pause}/>
            <audio ref={song} id="player" src={finishUrlSong}></audio>
            <Loader songLoaded={songLoaded}/>
            <PlayerDisplay song={song} play={play} pause={pause}/>
        </div>

    );
};

export default MusicPlayer;