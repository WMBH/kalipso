import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
	followAC,
	unfollowAC,
	setUsersAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	isFetchingToggleAC
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from '../Preloader/Preloader';
class UsersContainer extends Component {
	componentDidMount() {
		this.props.isFetchingToggle(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props
					.pageSize}`,
				{
					withCredentials: true
				}
			)
			.then((res) => {
				this.props.setUsers(res.data.items);
				this.props.setTotalUsersCount(res.data.totalCoutn);
				this.props.isFetchingToggle(false);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.isFetchingToggle(true);
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
				withCredentials: true
			})
			.then((res) => {
				this.props.setUsers(res.data.items);
				this.props.isFetchingToggle(false);
			});
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
					follow={this.props.follow}
					unfollow={this.props.unfollow}
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
		isFetching: state.usersPage.isFetching
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
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		isFetchingToggle: (isFetching) => {
			dispatch(isFetchingToggleAC(isFetching));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
