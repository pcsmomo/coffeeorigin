import { FETCH_ORIGINS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORIGINS:
      return action.payload;
    default:
      return state;
  }
};
