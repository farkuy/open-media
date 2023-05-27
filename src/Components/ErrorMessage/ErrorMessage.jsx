import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Error.css'
const ErrorMessage = () => {

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.error.message);


    return (
        <div className={`error`}>
            {errorMessage}
        </div>
    );
};

export default ErrorMessage;