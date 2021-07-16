import {
  ADD_NEW_CARTRIDGE,
  REMOVE_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH_CARTRIDGES,
  REMOVE_ALL_CARTRIDGE,
  FINISH_REQUEST,
  DEVICE_FILTER_BRANCH,
} from "./types";

import {branchs, cartridges_types} from './defaultValues';

const initialState = {
  cartridges: [],
  modal: false,
  branch: "",
  addLoading: false,
  finishRequestCartridges: [],
  docxGenerator: []
}; 

export const reducerEquipment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CARTRIDGE:
      return {
        ...state,
        cartridges: [...state.cartridges, action.payload],
        addLoading: false,
      };
    case REMOVE_ALL_CARTRIDGE:
      const filterBranch = state.cartridges.filter(el=> {
        return el.branch !== state.branch;
      })
      return {
        ...state,
        cartridges: [...filterBranch]
      }
      case FINISH_REQUEST:
        const oneRequest = action.payload[0].branch
        return {
          ...state,
          finishRequestCartridges: [...state.finishRequestCartridges, {
            [oneRequest]: action.payload
          }]
        }
      case "DOCX": 
      const obj = {};
      cartridges_types.map((el, index) => {
        action.payload.forEach(elem=> {
          if(el === elem.model) {
            obj[elem.model] =elem.count
          }
        })
      })
      // console.log(obj);
        return {
          ...state,
          docxGenerator: [obj]
        }
    // case FINISH_REQUEST: 
    //   const branch = branchs.filter(el => {
    //       return el === action.payload[0].branch
    //   })
    //   const br = branch[0]
    //   console.log(branch, ' --- ', branch[0]);

    //   if(state[br] === undefined) {
    //     return {
    //     ...state,
    //     finishRequestCartridges: [...state.finishRequestCartridges, ...action.payload]
    //     }
    //   }
    //   return {
    //       ...state,
    //       [br]: [...state[br], ...action.payload]
    //   }
      case DEVICE_FILTER_BRANCH:
      const branches = state.cartridges.filter((el) => {
        return el.branch === action.payload;
      });
      return {
        ...state,
        cartridges: [...branches],
      }
    // return {
    //   ...state, 
    //   finishRequestCartridges: [...state.finishRequestCartridges, ...action.payload]
    // }
    case SHOW_MODAL_ADD_CARTRIDGE:
      return {
        ...state,
        modal: action.payload,
      };
    case ADD_BRANCH_CARTRIDGES:
      return {
        ...state,
        branch: action.payload,
      };
    case REMOVE_CARTRIDGE:
      const temp2 = state.cartridges.filter((el) => {
        console.log(el.id, action.payload);
        return el.id !== action.payload;
      });
      return {
        ...state,
        cartridges: [...temp2],
      };

    default:
      return state;
  }
};
