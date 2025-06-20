import { createStore } from 'redux';

// Simple initial state
const initialState = {
  user: null,
};

// Reducer function
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
