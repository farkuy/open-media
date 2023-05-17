const defaultState = {
    urlSong: ''
}

export const reducerUrlSong = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_URL_SONG':
            return {...state, urlSong: action.payload}
        default:
            return state
    }
}