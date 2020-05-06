import { GET_COURSE, INPUT_COURSE, SEARCH_COURSE } from "../config/constants";

const initialState = {
  data: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_COURSE}_PENDING`:
    case `${INPUT_COURSE}_PENDING`:
    case `${SEARCH_COURSE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_COURSE}_FULFILLED`:
    case `${INPUT_COURSE}_FULFILLED`:
    case `${SEARCH_COURSE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_COURSE}_REJECTED`:
    case `${INPUT_COURSE}_REJECTED`:
    case `${SEARCH_COURSE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
