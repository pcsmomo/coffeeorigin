import { FETCH_COUNTRIES } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};
