// import { FINISH_REQUEST } from "./types"
// import {branchs} from './defaultValues';

// const initialState = {
//     cartridges: []
// }

// export const finishRequestCartridge = (state = initialState, action) => {
//     switch(action.type) {
//         case FINISH_REQUEST:
//             // const branch = branchs.filter(el => {
//             //     return el === action.payload[0].branch
//             // })
//             // const br = branch[0]
//             // return {
//             //     ...state,
//             //     [br]: [...action.payload]
//             // }
//         case FINISH_REQUEST: 
//             return {
//                 ...state,
//                 cartridges: [...state.cartridges, ...action.payload]
//             }
//         default: return state
//     }
// }