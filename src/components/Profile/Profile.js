import React from 'react';
import styles from './Profile.module.css';
import PostList from './PostList/PostList';

const Profile = () => {
	return (
		<div className={styles.content}>
			<div>
				<img src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg" />
			</div>
			<div>ava + opisanie</div>
			<PostList />
		</div>
	);
};

export default Profile;
