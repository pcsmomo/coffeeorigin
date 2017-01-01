import { combineReducers } from "redux";
import originsReducer from "./originsReducer";

export default combineReducers({
  origins: originsReducer
});
