const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 50,
	currentPage: 1,
	isFetching: false
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				})
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
		case IS_FETCHING_TOGGLE: {
			return {
				...state,
				isFetching: action.isFetching
			};
		}
		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const isFetchingToggleAC = (isFetching) => ({ type: IS_FETCHING_TOGGLE, isFetching });

export default usersReducer;
