import {cartridges_types} from '../redux/defaultValues';

const initialState = {
    finishRequestCartridges: [],
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
                    actualReturn: [],
                    countTransferFromWarehouse: 0,
                    countActualReturn: 0
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
            state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id === action.payload.id) {
                    const count = el.transferFromWarehouse.reduce((acc, val)=> acc+ +val.count, 0);
                    el.countTransferFromWarehouse = Number(count)
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
            state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id === action.payload.id) {
                    const count = el.actualReturn.reduce((acc, val)=> acc+ +val.count, 0);
                    el.countActualReturn = Number(count)
                }
            })
            return {
                ...state,                
            };
        default : return state
        }
}
