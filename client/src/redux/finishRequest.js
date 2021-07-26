// const initialState = {
//     finishRequestCartridges: [],
//     // descriptionField: {
//     //   id: "",
//     //   allCartridge: 0,
//     //   dateToRequest: "",
//     //   dateToExportOnSu: "",
//     //   dateToImportOnSu: "",
//     //   branch: "",
//     //   totalCount: 0,
//     //   note: ''
//     // },
//     // cartridges: [],
//     // returnCartdige: []
//     }

// export const finishCartridgeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "FINISH_ADDED":
//             console.log(action.payload, action.description);
//             return {
//                 ...state,
//                 finishRequestCartridges: [...state.finishRequestCartridges, {
//                     descriptionField: {
//                         ...state.descriptionField,
//                         id: action.description.id,
//                         branch: action.description.branch,
//                         dateToRequest: action.description.dateToRequest,
//                         totalCount: action.description.totalCount,
//                         note: action.description.note
//                     },
//                     cartridges: [...action.payload],
//                     transferFromWarehouse: [],
//                     actualReturn: []
//                 }]
//             }
//         case 'ADD_TRANSFER_WAREHOUSE':
//             console.log(state.finishRequestCartridges);
//             return {
//                 ...state,
//                 transferFromWarehouse: [ ...state.finishRequestCartridges[transferFromWarehouse], action.payload]   
//             };
//         default : return state
//         }
// }


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
            console.log(action.payload, action.description);
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
            state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id, action.payload.id) {
                    el.transferFromWarehouse.push(action.payload)
                }
            })
            return {
                ...state,                
            };
        case 'actualReturn':
            state.finishRequestCartridges.forEach(el=> {
                if(el.descriptionField.id, action.payload.id) {
                    el.actualReturn.push(action.payload)
                }
            })
            return {
                ...state,                
            };
        default : return state
        }
}
