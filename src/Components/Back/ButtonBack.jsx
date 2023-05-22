import React from 'react';
import button from "../Button/Button";
import './ButtonBackStyle.css'
import {useDispatch, useSelector} from "react-redux";

const ButtonBack = () => {
    const dispatch = useDispatch();

    const back = (e) => {
        e.preventDefault();

        dispatch({type: 'ADD_VISIBLE', payload: true});
    }

    return (
        <button
            onClick={back}
        >
            Back
        </button>
    );
};

export default ButtonBack;