import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MusicPlayer = () => {

    const dispatch = useDispatch();
    const finishUrlSong = useSelector(state => state.urlSong.urlSong);


    return (
        <div className={`player`}>
            <figure>
                <audio controls>
                    <source src={finishUrlSong} type="audio/mpeg"/>
                    </audio>
            </figure>
        </div>

    );
};

export default MusicPlayer;