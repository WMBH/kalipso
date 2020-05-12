import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followToggleAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		followToggle: (userId) => {
			dispatch(followToggleAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
