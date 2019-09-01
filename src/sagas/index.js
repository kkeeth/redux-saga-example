import { put, call, delay, takeEvery } from 'redux-saga/effects';
import { INCREMENT_ASYNC, increment } from '../actions';

export function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
