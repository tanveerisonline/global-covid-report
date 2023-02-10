import { GET_REGIONS } from '../actions/regions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
