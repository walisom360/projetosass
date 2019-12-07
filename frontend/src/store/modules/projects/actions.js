export const getProjectsRequest = () => ({
	type: 'GET_PROJECTS_REQUEST'
});

export const getProjectsSuccess = (data) => ({
	type: 'GET_PROJECTS_SUCCESS',
	payload: { data }
});

export const projectModalOpen = () => ({
	type: 'PROJECT_MODAL_OPEN'
});

export const projectModalClose = () => ({
	type: 'PROJECT_MODAL_CLOSE'
});

export const createProjectRequest = (title) => ({
	type: 'CREATE_PROJECT_REQUEST',
	payload: { title }
});

export const createProjectSuccess = (project) => ({
	type: 'CREATE_PROJECT_SUCCESS',
	payload: { project }
});
