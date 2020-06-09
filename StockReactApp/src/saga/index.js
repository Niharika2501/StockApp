import { call, put, takeLatest } from 'redux-saga/effects';
import * as ationTypes from '../actionType';
import { REQUEST } from '../utils/reduxUtil';
import * as apis from '../apis';
import * as actions from '../actions/stockApp';
import { fork, all } from 'redux-saga/effects';
import '@babel/polyfill';
function* fetchStockList() {
  try {
    const {data,error} = yield call(apis.requestStockList);
    yield put(actions.getStocklist.success(data));
  } catch (error) {
    yield put(actions.getStocklist.failure(error));
  }
}

 function* stockSagas() {
  yield takeLatest(ationTypes.getStocklist[REQUEST], fetchStockList);
}


export default function* root() {
  yield all([fork(stockSagas)]);
}
