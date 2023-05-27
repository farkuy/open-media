import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './RequestStoreStyle.css'

const RequestStore = ({oneClickStoreUrl}) => {

    const dispatch = useDispatch();
    const dataStore = useSelector(state => state.requestHistory.getStore);

    const [dataRequest, setDataRequest] = useState([]);
    useMemo(() => {
        setDataRequest(dataStore);
        if (dataStore.length <= 0) {
            dispatch({type:'ADD_VISIBLE_STORE', payload: false});
        }
    }, [dataStore])

    return (
        <ul
            id={'datalist'}
        >
            {
                dataRequest.map((request, index) => {
                    return <li
                        onClick={async (e) => {
                            await e.stopPropagation();
                            await e.preventDefault();
                            await dispatch({type: 'ADD_URL_SONG', payload: request})
                            await oneClickStoreUrl(request);
                        }}
                        key={index}
                        value={request}
                    >
                        {request}
                    </li>
                })
            }
        </ul>
    );
};

export default RequestStore;