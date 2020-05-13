const initialState = {
    drawer_open : false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "DRAWER_TOGGLE":
        return { ...state, drawer_open : !state.drawer_open }

    default:
        return state
    }
}
