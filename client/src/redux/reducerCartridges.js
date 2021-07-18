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
    case FINISH_REQUEST:
      const oneRequest = action.payload[0].branch;
      return {
        ...state,
        finishRequestCartridges: [
          ...state.finishRequestCartridges,
          {
            [oneRequest]: action.payload,
          },
        ],
      };
    case DOCX:
      const obj = {};
      cartridges_types.forEach((el, index) => {
        action.payload.forEach((elem) => {
          if (el === elem.model) {
            obj[elem.model] = elem.count;
          }
        });
      });
      return {
        ...state,
        docxGenerator: [obj],
      };

    case DOCX_RESET:
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
