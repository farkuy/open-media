import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ButtonStyle.css'

const Button = ({urlAudio}) => {

    const dispatch = useDispatch();
    const urlSong = useSelector(state => state.urlSong.urlSong);
    const visibleForm = useSelector(state => state.visibleForm.visible);
    const errorMessage = useSelector(state => state.error.message);
    const errorVisible = useSelector(state => state.error.visible)

    const playAudio = async (e) => {
        e.preventDefault();

        if (!urlSong.startsWith('https://')) {
            dispatch({type:'ADD_VISIBLE_ERROR', payload: true});
            dispatch({type:'ADD_MESSAGE', payload: `The query must begin with https://`});
            return;
        }

        try {
            const audio = new Audio(urlSong);
            /*if (!audio.canPlayType()) {
                throw new Error('Invalid audio URL');
            }*/

            audio.oncanplay = () => {
                alert(`Робит`)
            };

            audio.onerror = () => {
                return
            };

            await audio.load();

            dispatch({type: 'ADD_VISIBLE', payload: false})
        } catch (e) {
            dispatch({type:'ADD_VISIBLE_ERROR', payload: true});
            dispatch({type:'ADD_MESSAGE', payload: e.message});
        }

    }

    return (
        <button
            onClick={playAudio}
        >
        <div className={`btn`}>

                <div className={`vector`}>
                </div>
                <div className={`ok`}>
                </div>
        </div>
        </button>
    );
};

export default Button;