import {
  ADD_NEW_CARTRIDGE,
  REMOVE_CARTRIDGE,
  SHOW_MODAL_ADD_CARTRIDGE,
  ADD_BRANCH_CARTRIDGES,
  REMOVE_ALL_CARTRIDGE,
  FINISH_REQUEST,
  DEVICE_FILTER_BRANCH,
  DOCX,
  DOCX_RESET,
} from "./types";

import { cartridges_types } from "./defaultValues";

const initialState = {
  cartridges: [],
  modal: false,
  typeModal: "",
  id: "",
  branch: "",
  addLoading: false,
  finishRequestCartridges: [],
  docxGenerator: [],
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
      const filterBranch = state.cartridges.filter((el) => {
        return el.branch !== state.branch;
      });
      return {
        ...state,
        cartridges: [...filterBranch],
      };
    case "ADD_MODEL_COUNT":
    let newCart = [...state.cartridges];
    
    if(action.payload.count !== '0') {
      const index = newCart.findIndex(el => el.model === action.payload.model);
      if(index === -1) {
        newCart.push(action.payload);
      }
    } else newCart = newCart.filter(el=> el.model !== action.payload.model)
    
    return {
      ...state,
      cartridges: [...newCart]
    }

    // if(index !== -1) {

    //   if(action.payload.count === "0") {
    //     state.cartridges.splice(index, 1);
    //   } else {
    //     state.cartridges[index].count = Number(action.payload.count);
    //   }

    //   return {
    //     ...state,
    //     cartridges: [...state.cartridges]
    //   }
    // } else {
    //   return {
    //     ...state,
    //     cartridges: [...state.cartridges, action.payload],
    //   };
    

    case "CHANGE_CARTRIDGE_COUNT":
      const newCount = state.cartridges.map((elem) => {
        if (elem.id === state.id) {
          elem.count = action.payload.count;
          return elem;
        } else {
          return elem;
        } 
      });
      return {
        ...state,
        cartridges: [...newCount],
      };
    case FINISH_REQUEST:
      return {
        ...state,
        finishRequestCartridges: [
          ...state.finishRequestCartridges,
          action.payload,
        ],
      };

    case DOCX:
      const obj = {};
      cartridges_types.forEach((el) => {
        action.payload.forEach((elem) => {
          if (el.model === elem.model) {
            obj[elem.model] = elem.count;
          }
        });
      });
      return {
        ...state,
        docxGenerator: [obj],
      };
    case "CARTRIDGE_RESET":
      return {
        ...state,
        cartridges: [],
      };

    case DOCX_RESET:
      cartridges_types.forEach((type) => {
        (type.active = true)
        type.count = 0
      });
      return {
        ...state,
        docxGenerator: [],
      };
    case DEVICE_FILTER_BRANCH:
      const branches = state.cartridges.filter((el) => {
        return el.branch === action.payload;
      });
      return {
        ...state,
        cartridges: [...branches],
      };

    case SHOW_MODAL_ADD_CARTRIDGE:
      if(!action.payload.modal) {
        cartridges_types.forEach((el) => el.count = 0);
      }
      return {
        ...state,
        modal: action.payload.modal,
        typeModal: action.payload.typeModal,
        id: action.payload.id,
      };

    case ADD_BRANCH_CARTRIDGES:
      cartridges_types.forEach((cartridge) => (cartridge.count = 0));
      return {
        ...state,
        branch: action.payload,
        typeModal: "addCartridge",
      };

    case REMOVE_CARTRIDGE:
      const temp2 = state.cartridges.filter((el) => {
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
