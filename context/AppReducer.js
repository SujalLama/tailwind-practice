export const initialValue = {
    number: 1
}

export const numberReducer = (state, action) => {
    switch(action.type) {
        case "ADD_NUMBER":
            return {...state, number: action.value + state.number}
        default:
            return state;
    }
}
