import { combineReducers } from 'redux';
import cartReducer from './cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers here if needed
});

export default rootReducer;
