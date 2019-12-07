import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import { getProjectsSuccess, createProjectSuccess } from './actions';
import { projectModalClose } from './actions';

import api from '../../../services/api';

function* getProjects() {
	const { data } = yield call(api.get, 'projects');

	yield put(getProjectsSuccess(data));
}

function* createProject({ payload }) {
	try {
		const { title } = payload;

		const { data } = yield call(api.post, 'projects', { title });

		yield put(createProjectSuccess(data));
		yield put(projectModalClose());
	} catch (err) {
		yield toastrActions.add({
			type: 'error',
			title: 'Erro na operação',
			message: 'Houve um erro , tente novamente!'
		});
	}
}

export default all([
	takeLatest('GET_PROJECTS_REQUEST', getProjects),
	takeLatest('SELECT_TEAM', getProjects),
	takeLatest('CREATE_PROJECT_REQUEST', createProject)
]);
