const INITIAL_STATE = {
	membersModalOpen: false,
	data: []
};

export default function members(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'MEMBER_MODAL_OPEN':
			return { ...state, membersModalOpen: true };
		case 'MEMBER_MODAL_CLOSE':
			return { ...state, membersModalOpen: false };
		case 'GET_MEMBERS_SUCCESS':
			return { ...state, data: action.payload.data };
		// case 'UPDATE_MEMBER_REQUEST':
		// 	let roles = action.payload.roles;
		// 	return {
		// 		...state,
		// 		data: state.data.map((member) => (member.id === action.payload.id ? { ...member, roles } : member))
		// 	};
		default:
			return state;
	}
}
