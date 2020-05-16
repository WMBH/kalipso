const SET_USERS = 'SET_USERS';
const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 50,
	currentPage: 1
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_TOGGLE:
			return {
				...state,
				users: state.users.map((u) => ({ ...u, followed: !state.followed }))
			};
		case SET_USERS: {
			return { ...state, users: action.users };
		}
		case SET_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalUsersCount };
		}
		default:
			return state;
	}
};

export const followToggleAC = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default usersReducer;
