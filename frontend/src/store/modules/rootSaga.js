import { all } from 'redux-saga/effects';

import auth from '../modules/auth/sagas';
import teams from '../modules/teams/sagas';
import projects from '../modules/projects/sagas';
import members from '../modules/members/sagas';

export default function* rootSaga() {
	return yield all([ auth, teams, projects, members ]);
}
