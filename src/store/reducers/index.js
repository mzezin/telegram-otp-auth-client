import * as TYPE from '../actions/constants';
import sampleState from './sampleState';

const reducer = (state = sampleState, action) => {
  switch (action.type) {
    case TYPE.FETCH_DATA:
      return { ...state, dataLoading: true };
    case TYPE.SET_DATA:
      return { ...state, dataLoading: false, data: action.data };
    default:
      return state;
  }
};
export default reducer;
