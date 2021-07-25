import { combineReducers } from "redux";
import cartridgeCart from "./cartridgeCart";
import { deviceReducer } from "./deviceReducer";
import { finishCartridgeReducer } from "./finishRequest";
import { reducerEquipment } from "./reducerCartridges";

export const rootReducer = combineReducers({
    equipment: reducerEquipment,
    finish: finishCartridgeReducer,
    cartridge: cartridgeCart,
    device: deviceReducer
})