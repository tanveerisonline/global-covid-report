import { GET_COUNTRIES } from '../actions/countries';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
