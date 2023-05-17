import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ErrorMessage = () => {

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.error.message);


    return (
        <div>
            {errorMessage}
        </div>
    );
};

export default ErrorMessage;