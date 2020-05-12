const SET_USERS = 'SET_USERS';
const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';

let initialState = {
	users: [
		{
			id: 1,
			photoUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
			followed: false,
			fullName: 'Dmitry',
			status: 'I am a boss',
			location: { city: 'Minsk', country: 'Belarus' }
		},
		{
			id: 2,
			photoUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
			followed: true,
			fullName: 'Sasha',
			status: 'I am a boss too',
			location: { city: 'Moscow', country: 'Russia' }
		},
		{
			id: 3,
			photoUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
			followed: false,
			fullName: 'Andrew',
			status: 'I am a boss too',
			location: { city: 'Kiev', country: 'Ukraine' }
		}
	]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_TOGGLE:
			return {
				...state,
				users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: !state.followed } : u))
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
