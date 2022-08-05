import { combineReducers } from "redux";
import navigateReducer from "./navigationReducer";
import canvasReducer from "./canvasReducer";

export default combineReducers({navigation: navigateReducer, canvas: canvasReducer})