const initialState = {
    caseDetails: []
}

import {
  GET_COVID_DETAILS
} from '../actions/mainAction';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case GET_COVID_DETAILS:
      return {
        ...state,
        caseDetails: action.payload
      }
    default:
      return state;
  }
};

export default authReducer;
