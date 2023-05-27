import React from 'react';
import button from "../Button/Button";
import './ButtonBackStyle.css'
import {useDispatch} from "react-redux";

const ButtonBack = ({song, pause}) => {
    const dispatch = useDispatch();

    const back = async (e) => {
        e.preventDefault();

        dispatch({type: 'ADD_URL_SONG', payload: ``});
        dispatch({type: 'ADD_VISIBLE', payload: true});
    }

    return (
        <button
            onClick={back}
        >
            ← Back
        </button>
    );
};

export default ButtonBack;