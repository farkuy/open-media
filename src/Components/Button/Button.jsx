import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ButtonStyle.css'

const Button = () => {

    const dispatch = useDispatch();
    const urlSong = useSelector(state => state.urlSong.urlSong);
    const requestHistory = useSelector(state => state.requestHistory.getStore);

    const playAudio = async (e) => {
        e.preventDefault();

        if (!urlSong.startsWith('https://')) {
            dispatch({type:'ADD_VISIBLE_ERROR', payload: true});
            dispatch({type:'ADD_MESSAGE', payload: `The query must begin with https://`});
            return;
        }

        try {
            const audio = await new Audio(urlSong);

            await audio.play();
            await audio.pause();

            if(!requestHistory.includes(urlSong)) {
                dispatch({type: 'ADD_STORE', payload: urlSong})
            }

            dispatch({type: 'ADD_VISIBLE', payload: false});
            dispatch({type:'ADD_VISIBLE_ERROR', payload: false});
            dispatch({type:'ADD_MESSAGE', payload: ``});
        } catch (e) {
            console.error(e.message)
            dispatch({type:'ADD_VISIBLE_ERROR', payload: true});
            dispatch({type:'ADD_MESSAGE', payload: e.message});
        }

    }

    return (
        <button
            className={'arrow'}
            onClick={playAudio}
        >
            <div className="right-arrow"></div>
        </button>
    );
};

export default Button;