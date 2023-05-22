import {combineReducers, createStore} from "redux";
import {reducerUrlSong} from "./reducerUrlSong";
import {reducerVisiblePlayerForm} from "./reducerVisiblePlayerForm";
import {reducerErrorRequest} from "./reducerErrorRequest";
import {reducerStore} from "./reducerStore";

const rootReducer = combineReducers({
    urlSong: reducerUrlSong,
    visibleForm: reducerVisiblePlayerForm,
    error: reducerErrorRequest,
    requestHistory: reducerStore,
})

export const store = createStore(rootReducer)
