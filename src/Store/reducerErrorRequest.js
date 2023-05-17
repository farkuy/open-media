const defaultState = {
    visible: false,
    message: '',
}

export const reducerErrorRequest = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_VISIBLE_ERROR':
            return {...state, visible: action.payload}
        case 'ADD_MESSAGE':
            return {...state, message: action.payload}
        default:
            return state
    }
}