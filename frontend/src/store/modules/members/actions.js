export const memberModalOpen = () => ({
	type: 'MEMBER_MODAL_OPEN'
});

export const memberModalClose = () => ({
	type: 'MEMBER_MODAL_CLOSE'
});

export const getMembersRequest = () => {
	console.log('aeeee');

	return {
		type: 'GET_MEMBERS_REQUEST'
	};
};

export const getMembersSuccess = (data) => ({
	type: 'GET_MEMBERS_SUCCESS',
	payload: { data }
});


export const updateMemberRequest = (id , roles) => ({
   type:'UPDATE_MEMBER_REQUEST',
   payload:{id,roles}
})