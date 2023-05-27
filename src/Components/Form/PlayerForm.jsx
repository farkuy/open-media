import React, {useState} from 'react';
import SearchUrl from "../Search/SearchUrl";
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './PlayerForm.css'

const PlayerForm = () => {

    const [searchMusic, setSearchMusic] = useState(``);

    const errorVisible = useSelector(state => state.error.visible);

    const urlSongSearch = (url) => {
        setSearchMusic(url);
    }

    return (
        <form className={'player_form'}>
            <div className="insert">Insert the link</div>
            <div className={`row`}>
                <SearchUrl urlSongSearch={urlSongSearch}/>
                <Button urlAudio={searchMusic}/>
            </div>
            {
                errorVisible
                ? <ErrorMessage/>
                : <div></div>
            }
        </form>
    );
};

export default PlayerForm;