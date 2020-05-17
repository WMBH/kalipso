import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/AvatarPlaceholder.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div>
				{pages.map((page) => {
					return (
						<span
							className={props.currentPage === page ? styles.selectedPage : ''}
							onClick={(e) => {
								props.onPageChanged(page);
							}}
						>
							{page}
						</span>
					);
				})}
			</div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={u.photos.small === null ? userPhoto : u.photos.small}
									className={styles.userPhoto}
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										axios
											.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
												withCredentials: true,
												headers: {
													"API-KEY": '26d690f8-c7bc-4d44-bdf5-6d28a6f0e28d'
												}
											})
											.then((res) => {
												if (res.data.resultCode == 0) {
													props.unfollow(u.id);
												}
											});
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														"API-KEY": '26d690f8-c7bc-4d44-bdf5-6d28a6f0e28d'
													}
												}
											)
											.then((res) => {
												if (res.data.resultCode == 0) {
													props.follow(u.id);
												}
											});
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
