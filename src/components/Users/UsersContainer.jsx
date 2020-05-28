import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
	followAC,
	unfollowAC,
	setCurrentPageAC,
	isFollowingToggleAC,
	getUsersThunkCreator,
	unfollowToggleThunkCreator,
	followToggleThunkCreator
} from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';
class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	};

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.followToggleThunk}
					unfollow={this.props.unfollowToggleThunk}
					followingInProgress={this.props.followingInProgress}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		isFollowingToggle: () => {
			dispatch(isFollowingToggleAC());
		},
		getUsersThunk: () => {
			dispatch(getUsersThunkCreator());
		},
		followToggleThunk: () => {
			dispatch(followToggleThunkCreator());
		},
		unfollowToggleThunk: () => {
			dispatch(unfollowToggleThunkCreator());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
