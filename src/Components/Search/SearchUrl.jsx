import React, {useState} from 'react';
import './SearchStyle.css'
import {useDispatch, useSelector} from "react-redux";
import RequestStore from "../RequestStore/RequestStore";
const SearchUrl = ({urlSongSearch}) => {

    const [searchMusic, setSearchMusic] = useState(``);

    const dispatch = useDispatch();
    const requestStoreVision = useSelector(state => state.requestHistory.visibleStore);
    const requestStore = useSelector(state => state.requestHistory.getStore);
    const urlSearch = async (e) => {
        e.preventDefault();

        setSearchMusic(e.target.value);
        urlSongSearch(e.target.value);

        await dispatch({type:'ADD_URL_SONG', payload: e.target.value});
    }

    const oneClickStoreUrl = async (url) => {
        await setSearchMusic(url)
    }

    const hideList = (e) => {
        setTimeout(() => {
            dispatch({type: 'ADD_VISIBLE_STORE', payload: false});
        }, 150)
    }

    return (
        <div>
            <input
                className={`inpt`}
                list={'datalist'}
                value={searchMusic}
                onChange={urlSearch}
                type="text"
                placeholder={`https://`}
                onBlur={hideList}
                onFocus={async () => {
                    await dispatch({type:'ADD_VISIBLE_STORE', payload: true});
                }

                }
            />
            {
                requestStoreVision
                    ? <RequestStore oneClickStoreUrl={oneClickStoreUrl}/>
                    : <div></div>
            }
        </div>


    );
};

export default SearchUrl;