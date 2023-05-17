const defaultState = {
    visible: true
}
export const reducerVisiblePlayerForm = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_VISIBLE':
            return {...state, visible: action.payload}
        default:
            return state
    }
}