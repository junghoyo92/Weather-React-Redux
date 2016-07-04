import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);    // cannot manipulate states (no push), therefore add a new version of state
      return [ action.payload.data, ...state ];       // identical to above, creates [data, data, data]
  }

  return state;
}
