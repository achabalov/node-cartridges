import { ADD_DEVICES, DATA_EXPORT_IN_REPAIR, DATA_EXPORT_ON_SU, DATA_EXPORT_TO_SU, DATA_IMPORT_OF_REPAIR } from "./types";

const initialState = {
    devices: []
}

export const deviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DEVICES:
            return {
                ...state,
                devices: [...state.devices, action.payload]
            }
        case DATA_EXPORT_ON_SU:
            const dataImportOnSu = state.devices.map(el=> {
                if(el.id === action.id) {
                    el.dateImportOnSU = action.payload;
                }
                return el;
            })
            return {
                ...state,
                devices: dataImportOnSu
            }
        case DATA_EXPORT_IN_REPAIR:
            const dataInRepair = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateExportOnRepair = action.payload;
                }
                return el
            })
            return {
                ...state,
                devices: dataInRepair
            }
        case DATA_IMPORT_OF_REPAIR:
            const dataOfRepair = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateImportOfRepair = action.payload;
                }   
                return el
            })
            return {
                ...state,
                devices: dataOfRepair
            }
        case DATA_EXPORT_TO_SU:
            const dataToSu = state.devices.map(el => {
                if(el.id === action.id) {
                    el.dateExportToSU = action.payload;
                }   
                return el
            })
            return {
                ...state,
                devices: dataToSu
            }

        default: return state
    }
} 