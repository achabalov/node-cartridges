const initialState = {
    model: '',
    count: ''
}

const cartridgeCart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MODEL':
            return {
                ...state,
                model: action.payload
            }
        case 'ADD_COUNT':
            return {
                ...state,
                count: action.payload
            }
        case 'RESET':
            return {
                model: '',
                count: ''
            }

        default: return state;
    }
}

export default cartridgeCart;