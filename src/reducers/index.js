// import combineReducers from redux

// export default const rootReducer set to call to combineReducers 
	// dummy state set to (state = {} )=> state

import { combineReducers } from 'redux';

export default const rootReducer = combineReducers({
  state: (state = {}) => state
});

