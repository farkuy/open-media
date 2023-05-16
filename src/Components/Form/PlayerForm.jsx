import React, {useState} from 'react';
import SearchUrl from "../Search/SearchUrl";
import Button from "../Button/Button";

const PlayerForm = () => {

    const [searchMusic, setSearchMusic] = useState(``);

    const urlSong = (url) => {
        setSearchMusic(url)
    }

    return (
        <form >
            <SearchUrl urlSong={urlSong}/>
            <Button urlAudio={searchMusic}/>
        </form>
    );
};

export default PlayerForm;