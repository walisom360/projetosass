const INITIAL_STATE = {
	projectModalOpen: false,
	data: []
};

export default function projects(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'GET_PROJECTS_SUCCESS':
			return { ...state, data: action.payload.data };
		case 'PROJECT_MODAL_OPEN':
			return { ...state, projectModalOpen: true };
		case 'PROJECT_MODAL_CLOSE':
			return { ...state, projectModalOpen: false };
		case 'CREATE_PROJECT_SUCCESS':
			return { ...state, data: [ ...state.data, action.payload.project ] };
		default:
			return state;
	}
}
