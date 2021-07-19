import { cartridges_types } from "./defaultValues"

const initialState = {
    model: '',
    count: 0
}

const cartridgeCart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MODEL':
            cartridges_types.forEach(elem => {
                return elem.model === action.payload ? elem.active = ! elem.active : '' 
            })
            return {
                ...state,
                model: action.payload
            }
        case 'ADD_MODEL_CsOUNT':
            return {
                ...state
            }
        case 'ADD_COUNT':
            return {
                ...state,
                count: action.payload
            }
        case 'RESET': 
            return {
                model: '',
                count: action.payload
            }

        default: return state;
    }
}

export default cartridgeCart;