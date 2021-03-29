import {put, call, takeEvery, select} from 'redux-saga/effects';
import {fetchDataFromApi} from '../../apiAccess/shopApi';
import * as Actions from '../shop/shop.types';

/**
 * Fetch WishList from API saga REST API
 * @returns {IterableIterator<*>}
 */
export function* getProductListSaga() {
    
    try {
      const products = yield call(fetchDataFromApi);
      yield put({
        type: Actions.FETCH_DATA_SUCCESS,
        payload: products,
      });
    } catch (err) {}
  }
export default function* shopSaga(){
    yield takeEvery(Actions.FETCH_DATA_SAGA,getProductListSaga)
}