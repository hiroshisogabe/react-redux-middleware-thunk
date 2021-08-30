import { ACTIONS, REQUEST_STATUS } from "../constants/contants";

function requestStatus(state = REQUEST_STATUS.IDLE, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_REQUEST_STATUS:
      return action.status;
    default:
      return state;
  }
}

function fetchedData(state = {}, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FETCHED_DATA:
      return action.payload;
    default:
      return state;
  }
}

const reducers = {
  requestStatus,
  fetchedData,
};

export default reducers;
