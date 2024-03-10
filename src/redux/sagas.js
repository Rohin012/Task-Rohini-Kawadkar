// redux/sagas.js
import { takeEvery, put } from 'redux-saga/effects';
import { addToCart } from './cartSlice';

function* watchAddToCart() {
  yield takeEvery('cart/addToCart', handleAddToCart);
}

function* handleAddToCart(action) {
  // Additional logic can be added here, such as making API calls
}

export default function* rootSaga() {
  yield watchAddToCart();
}
