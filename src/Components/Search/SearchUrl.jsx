import React, {useState} from 'react';

const SearchUrl = ({urlSong}) => {

    const [searchMusic, setSearchMusic] = useState(``)

    const urlSearch = (e) => {
        e.preventDefault();

        setSearchMusic(e.target.value);
        urlSong(e.target.value)
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