const defaultState = {
    timeNow: 0,
}

export const reducerSongInfo = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TIME_NOW':
            return {...state, timeNow: action.payload}
        case 'ADD_MAX_TIME':
            return {...state, MaxTime: action.payload}
        default:
            return state
    }
}