import {cartridges_types} from '../redux/defaultValues';

const initialState = {
    finishRequestCartridges: [],
    // descriptionField: {
    //   id: "",
    //   allCartridge: 0,
    //   dateToRequest: "",
    //   dateToExportOnSu: "",
    //   dateToImportOnSu: "",
    //   branch: "",
    //   totalCount: 0,
    //   note: ''
    // },
    // cartridges: [],
    // returnCartdige: []
    }

export const finishCartridgeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FINISH_ADDED":
            return {
                ...state,
                finishRequestCartridges: [...state.finishRequestCartridges, {
                    descriptionField: {
                        ...state.descriptionField,
                        id: action.description.id,
                        branch: action.description.branch,
                        dateToRequest: action.description.dateToRequest,
                        totalCount: action.description.totalCount,
                        note: action.description.note
                    },
                    cartridges: [...action.payload],
                    transferFromWarehouse: [],
                    actualReturn: []
                }]
            }
        case 'ADD_TRANSFER_WAREHOUSE':
            cartridges_types.forEach((el) => {
                if (el.model === action.payload.model) {
                  el.count = action.payload.count;
                }
              });
              state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id === action.payload.id) {
                    const index = el.transferFromWarehouse.findIndex(elem => elem.model === action.payload.model)
                        index !== -1 ? el.transferFromWarehouse[index].count = Number(action.payload.count) : el.transferFromWarehouse.push(action.payload)
                }
            })
            return {
                ...state,                
            };
        case 'actualReturn':
            cartridges_types.forEach((el) => {
                if (el.model === action.payload.model) {
                  el.count = action.payload.count;
                }
              });
            state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id === action.payload.id) {
                    const index = el.actualReturn.findIndex(elem => elem.model === action.payload.model)
                        index !== -1 ? el.actualReturn[index].count = Number(action.payload.count) : el.actualReturn.push(action.payload)
                }
            })
            return {
                ...state,                
            };
        default : return state
        }
}
