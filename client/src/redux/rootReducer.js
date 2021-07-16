import { combineReducers } from "redux";
import cartridgeCart from "./cartridgeCart";
import { deviceReducer } from "./deviceReducer";
import { finishRequestCartridge } from "./finishRequestCartridge";
import { reducerEquipment } from "./reducerCartridges";

export const rootReducer = combineReducers({
    equipment: reducerEquipment,
    cartridge: cartridgeCart,
    readyApplication: finishRequestCartridge,
    device: deviceReducer
})