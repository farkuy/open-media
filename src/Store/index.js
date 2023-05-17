import {combineReducers, createStore} from "redux";
import {reducerUrlSong} from "./reducerUrlSong";
import {reducerVisiblePlayerForm} from "./reducerVisiblePlayerForm";
import {reducerErrorRequest} from "./reducerErrorRequest";

const rootReducer = combineReducers({
    urlSong: reducerUrlSong,
    visibleForm: reducerVisiblePlayerForm,
    error: reducerErrorRequest,
})

export const store = createStore(rootReducer)
