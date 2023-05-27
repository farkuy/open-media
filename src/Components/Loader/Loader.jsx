import React, {useEffect, useState} from 'react';
import './Loader.css'
import {useSelector} from "react-redux";

const Loader = ({songLoaded}) => {


    return (
        <div>
            {
                songLoaded
                ? <div className="loader"></div>
                : <div></div>
            }

        </div>
    );
};

export default Loader;