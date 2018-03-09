import { combineReducers } from "redux";
import originsReducer from "./originsReducer";
import countriesReducer from "./countriesReducer";

export default combineReducers({
  origins: originsReducer,
  countries: countriesReducer
});
