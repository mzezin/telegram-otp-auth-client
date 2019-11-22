import {
  put, takeLatest, all,
  // delay, call,
} from 'redux-saga/effects';
import { get } from 'axios';
import * as TYPE from '../actions/constants';


function* fetchData() {
  const { data } = yield get('https://randomuser.me/api/');
  yield put({ type: TYPE.SET_DATA, data });
}

// function* periodicUpdate() {
//   while (true) {
//     yield call(fetchData);
//     yield delay(20000);
//   }
// }

function* actionWatcher() {
  yield takeLatest(TYPE.FETCH_DATA, fetchData);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    // periodicUpdate(),
  ]);
}
