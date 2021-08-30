import { ACTIONS } from "../constants/contants";

export function updateFetchedData(payload) {
  return {
    type: ACTIONS.UPDATE_FETCHED_DATA,
    payload,
  };
}

export function updateRequestStatus(status) {
  return {
    type: ACTIONS.UPDATE_REQUEST_STATUS,
    status,
  };
}
