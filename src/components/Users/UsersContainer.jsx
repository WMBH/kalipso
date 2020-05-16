import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followToggleAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		followToggle: (userId) => {
			dispatch(followToggleAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
