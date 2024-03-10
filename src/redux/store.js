import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), sagaMiddleware ],
});

sagaMiddleware.run(rootSaga);

export default store;
