import { combineReducers } from "redux";
import dropReducer from "./Drop/drop-reducer";

const rootReducer = combineReducers({
  drop: dropReducer
});

export default rootReducer;
