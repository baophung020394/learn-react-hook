import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/cartSlice';
import userReducer from '../features/Auth/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer, // number
  cart: cartReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
