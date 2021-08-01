import {
  ACTUAL_RETURN,
  ADD_TRANSFER_WAREHOUSE,
  CHANGE_ACTUAL_RETURN_COUNT,
  CHANGE_TRANSFER_WAREHOUSE_COUNTER,
  FINISH_ADDED,
  MODAL_ABOUT
} from './types';

const initialState = {
  finishRequestCartridges: [],
}

export const finishCartridgeReducer = (state = initialState, action) => {
  switch (action.type) {

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
      newModal.forEach(el => el.descriptionField.id === action.id ? el.descriptionField.modal = action.payload : null)
      return {
        ...state,
        finishRequestCartridges: [...newModal]
      }
    case ADD_TRANSFER_WAREHOUSE:
      const addNewTransfer = [...state.finishRequestCartridges];
      const foundedTransfer = addNewTransfer.find(el => el.descriptionField.id === action.payload.id)
      if (foundedTransfer) {
        if (action.payload.count !== 0) {
          const duplicateFromWarehouse = foundedTransfer.transferFromWarehouse.find(warehouseItem => warehouseItem.model === action.payload.model)
            if (duplicateFromWarehouse) {
              duplicateFromWarehouse.count = action.payload.count
            } else {
              foundedTransfer.transferFromWarehouse = [...foundedTransfer.transferFromWarehouse, action.payload]
            }
        } else {
          foundedTransfer.transferFromWarehouse = foundedTransfer.transferFromWarehouse.filter(newTransfer => newTransfer.model !== action.payload.model)
        }
        foundedTransfer.countTransferFromWarehouse = foundedTransfer.transferFromWarehouse.reduce((acc, val) => acc+ val.count, 0)
      }
      return {
        ...state,
        finishRequestCartridges: [...addNewTransfer]
      };

    case ACTUAL_RETURN:
      let addNewActualReturn = [...state.finishRequestCartridges];
      const foundedActual = addNewActualReturn.find(actualRequest => actualRequest.descriptionField.id === action.payload.id);
      if(foundedActual) {
        if(action.payload.count) {
          const dublicateActualModel = foundedActual.actualReturn.find(actualModel => actualModel.model === action.payload.model)
          if(dublicateActualModel) {
            dublicateActualModel.count = action.payload.count;
          } else {
            foundedActual.actualReturn = [...foundedActual.actualReturn, action.payload]
          }
        } else {
          foundedActual.actualReturn = foundedActual.actualReturn.filter(newActual => newActual.model !== action.payload.model);
        }
        foundedActual.countActualReturn = foundedActual.actualReturn.reduce((acc, val) => acc + val.count, 0);
      }

      return {
        ...state,
        finishRequestCartridges: [...addNewActualReturn]
      }

    default :
      return state
  }
}
