import { cartridges_types } from "./defaultValues"

const initialState = {
    model: '',
    count: 1
}

const cartridgeCart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MODEL':
            cartridges_types.forEach(elem => {
                return elem.model === action.payload ? elem.active = !elem.active : '' 
            })
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
                count: action.payload.count
            }

        default: return state;
    }
}

export default cartridgeCart;