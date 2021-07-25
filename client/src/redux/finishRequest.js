const initialState = {
    finishRequestCartridges: {
    descriptionField: {
      id: "",
      allCartridge: 0,
      dateToRequest: "",
      dateToExportOnSu: "",
      dateToImportOnSu: "",
      branch: "",
      totalCount: 0,
      note: ''
    },
    cartridges: [],
    returnCartdige: []
    }
}

export const finishCartridgeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FINISH_ADDED":
            console.log(action.payload, action.description);
            return {
                ...state,
                finishRequestCartridges: {
                    descriptionField: { 
                        ...state.descriptionField,
                        id: action.description.id,
                        branch: action.description.branch,
                        dateToRequest: action.description.dateToRequest,
                        totalCount: action.description.totalCount,
                        note: action.description.note
                    },
                    cartridges: [...action.payload]
                }
            }
        default : return state
        }
}