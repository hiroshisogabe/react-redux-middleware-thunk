import { updateFetchedData, updateRequestStatus } from "./actions";
import { REQUEST_STATUS } from "../constants/contants";

function buildPath(id) {
  return `https://swapi.dev/api/people/${id}`;
}

export function fetchDataById(id) {
  return async function fetchDataByCodeThunk(dispatch, getState) {
    /* Verifying requestStatus here only to show that beyond function
       dispatch, getState is available as well, both are provided */
    if (getState().requestStatus === REQUEST_STATUS.LOADING) {
      return;
    }
    dispatch(updateRequestStatus(REQUEST_STATUS.LOADING));

    try {
      const response = await fetch(buildPath(id));
      const payload = await response.json();
      
      dispatch(updateFetchedData(payload));
      dispatch(updateRequestStatus(REQUEST_STATUS.SUCCESS));
    } catch (err) {
      dispatch(updateRequestStatus(REQUEST_STATUS.ERROR));
    }
  };
}
