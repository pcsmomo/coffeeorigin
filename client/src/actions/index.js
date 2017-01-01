import axios from "axios";
import { FETCH_ORIGINS } from "./types";

export const fetchOrigins = () => async dispatch => {
  const res = await axios.get("/api/origins");

  dispatch({ type: FETCH_ORIGINS, payload: res.data });
};
