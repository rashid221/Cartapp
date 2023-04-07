import changeTheNumber from "./UpDown";
import { changeTheCart } from "./UpDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheCart
})

export default rootReducer;