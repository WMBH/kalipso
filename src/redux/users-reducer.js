import { usersAPI } from '../api/api';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';
const IS_FOLLOWING_TOGGLE = 'IS_FOLLOWING_TOGGLE';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 50,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
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
		case IS_FOLLOWING_TOGGLE: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [ ...state.followingInProgress, action.userId ]
					: state.followingInProgress.filter((id) => id !== action.userId)
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
export const isFollowingToggleAC = (isFetching, userId) => ({ type: IS_FOLLOWING_TOGGLE, isFetching, userId });

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(isFetchingToggleAC(true));
		usersAPI.getUsers(currentPage, pageSize).then((res) => {
			dispatch(setUsersAC(res.items));
			dispatch(setTotalUsersCountAC(res.totalCount));
			dispatch(isFetchingToggleAC(false));
		});
	};
};

export const followToggleThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(isFollowingToggleAC(true, userId));
		usersAPI.follow(userId).then((res) => {
			if (res.data.resultCode === 0) {
				dispatch.followAC(userId);
			}
			dispatch(isFollowingToggleAC(false, userId));
		});
	};
};

export const unfollowToggleThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(isFollowingToggleAC(true, userId));
		usersAPI.unfollow(userId).then((res) => {
			if (res.data.resultCode === 0) {
				dispatch.unfollowAC(userId);
			}
			dispatch(isFollowingToggleAC(false, userId));
		});
	};
};

export default usersReducer;
