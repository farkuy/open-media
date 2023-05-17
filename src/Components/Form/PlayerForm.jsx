import React, {useState} from 'react';
import SearchUrl from "../Search/SearchUrl";
import Button from "../Button/Button";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {useDispatch, useSelector} from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const PlayerForm = () => {

    const [searchMusic, setSearchMusic] = useState(``);

    const dispatch = useDispatch();
    const errorVisible = useSelector(state => state.error.visible)

    const urlSongSearch = (url) => {
        setSearchMusic(url);
    }

    return (
        <form >
            <SearchUrl urlSongSearch={urlSongSearch}/>
            <Button urlAudio={searchMusic}/>
            {
                errorVisible
                ? <ErrorMessage/>
                : <div></div>
            }
        </form>
    );
};

export default PlayerForm;