const SET_USERS = 'SET_USERS';
const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';

let initialState = {
	users: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_TOGGLE:
			return {
				...state,
				users: state.users.map((u) => ({ ...u, followed: !state.followed }))
			};
		case SET_USERS: {
			return { ...state, users: [ ...state.users, ...action.users ] };
		}
		default:
			return state;
	}
};

export const followToggleAC = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
