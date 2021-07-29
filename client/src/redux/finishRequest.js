import { ACTUAL_RETURN, ADD_TRANSFER_WAREHOUSE, CHANGE_ACTUAL_RETURN_COUNT, CHANGE_TRANSFER_WAREHOUSE_COUNTER, FINISH_ADDED, MODAL_ABOUT } from './types';

const initialState = {
    finishRequestCartridges: [],
    }

export const finishCartridgeReducer = (state = initialState, action) => {
    switch(action.type) {

        case FINISH_ADDED:
            return {
                ...state,
                finishRequestCartridges: [...state.finishRequestCartridges, {
                    descriptionField: {
                        ...state.descriptionField,
                        id: action.description.id,
                        modal: false,
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
        case MODAL_ABOUT: 
        const newModal = [...state.finishRequestCartridges]
        newModal.forEach(el=>  {
            console.log(el.descriptionField.id , action.id );
            const k = el.descriptionField.id === action.id ? el.descriptionField.modal = action.payload : null
        })
            return {
                ...state,
                finishRequestCartridges: [...newModal]
            }
        case ADD_TRANSFER_WAREHOUSE:
            const addNewTransfer = [...state.finishRequestCartridges];
            if(action.payload.count !== '0') {
                addNewTransfer.forEach(el=> {
                    if(el.descriptionField.id === action.payload.id && action.payload.count !== '0') {
                        const index = el.transferFromWarehouse.findIndex(elem => elem.model === action.payload.model)
                            index !== -1 ? el.transferFromWarehouse[index].count = Number(action.payload.count) : el.transferFromWarehouse.push(action.payload)
                    } })
                } else {
                    const index  = addNewTransfer.findIndex(el=> el.descriptionField.id === action.payload.id)
                    if(index !== '-1') {;
                        addNewTransfer[index].transferFromWarehouse = addNewTransfer[index].transferFromWarehouse.filter(el => el.model !== action.payload.model)
                    }
                }
            return {
                ...state,
                finishCartridgeReducer: [ ...addNewTransfer ]
            };
        case CHANGE_TRANSFER_WAREHOUSE_COUNTER:
            const newTransferCount = [...state.finishRequestCartridges];

            newTransferCount.forEach(el => {
                if(el.descriptionField.id === action.payload.id) {
                    const count = el.transferFromWarehouse.reduce((acc, val)=> acc+ +val.count, 0);
                    el.countTransferFromWarehouse = Number(count);
                }
            })

            return {
                ...state,
                finishRequestCartridges: [...newTransferCount]
            }

        case ACTUAL_RETURN:
            let addNewActualReturn = [...state.finishRequestCartridges];
            if(action.payload.count !== '0') {
            addNewActualReturn.forEach(el=> {
                if(el.descriptionField.id === action.payload.id && action.payload.count !== '0') {
                    const index = el.actualReturn.findIndex(elem => elem.model === action.payload.model)
                        index !== -1 ? el.actualReturn[index].count = Number(action.payload.count) : el.actualReturn.push(action.payload)
                } })
            } else {
                const index  = addNewActualReturn.findIndex(el=> el.descriptionField.id === action.payload.id)
                if(index !== '-1') {;
                    addNewActualReturn[index].actualReturn = addNewActualReturn[index].actualReturn.filter(el => el.model !== action.payload.model)
                }
            }
            return {
                ...state,
                finishRequestCartridges: [...addNewActualReturn]
            };
        case CHANGE_ACTUAL_RETURN_COUNT:
            const newActualCount = [...state.finishRequestCartridges];

            newActualCount.forEach(el => {
                if(el.descriptionField.id === action.payload.id) {
                    const count = el.actualReturn.reduce((acc, val)=> acc+ +val.count, 0);
                    el.countActualReturn = Number(count);
                }
            })

            return {
                ...state,
                finishRequestCartridges: [...newActualCount]
            }

        default : return state
        }
}
