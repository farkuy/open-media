const defaultState = {
    visibleStore: false,
    getStore: [],
}

export const reducerStore = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_VISIBLE_STORE':
            return {...state, visibleStore: action.payload}
        case 'ADD_STORE':
            return {...state, getStore: [ action.payload, ...state.getStore]}
        case 'DELETE_STORE':
            return {...state, getStore: action.payload}
        default:
            return state
    }
}