import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getMembersSuccess } from './actions';

function* getMembers() {
	const { data } = yield call(api.get, 'members');

	yield put(getMembersSuccess(data));
}

export default all([ takeLatest('GET_MEMBERS_REQUEST', getMembers) ]);
