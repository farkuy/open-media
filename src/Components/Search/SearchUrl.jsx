import React, {useState} from 'react';
import './SearchStyle.css'
import {useDispatch, useSelector} from "react-redux";
const SearchUrl = ({urlSongSearch}) => {

    const [searchMusic, setSearchMusic] = useState(``);

    const dispatch = useDispatch();
    const urlSong = useSelector(state => state.urlSong.urlSong);

    const urlSearch = async (e) => {
        e.preventDefault();

        setSearchMusic(e.target.value);
        urlSongSearch(e.target.value);
        await dispatch({type:'ADD_URL_SONG', payload: e.target.value});
    }

    return (
        <input
            value={searchMusic}
            onChange={urlSearch}
            type="text"
            placeholder={`https://`}
        />
    );
};

export default SearchUrl;