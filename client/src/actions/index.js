import axios from "axios";
import { FETCH_ORIGINS, FETCH_COUNTRIES } from "./types";

export const fetchOrigins = () => async dispatch => {
  const res = await axios.get("/api/origins");

  dispatch({ type: FETCH_ORIGINS, payload: res.data });
};

export const fetchCountries = () => async dispatch => {
  const res = await axios.get("/api/countries");

  dispatch({ type: FETCH_COUNTRIES, payload: res.data });
};
