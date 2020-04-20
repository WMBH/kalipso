import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<div className={styles.content}>
			<div>
				<img src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg" />
			</div>

			<div>ava + opisanie</div>
			<div className={styles.posts}>
				My posts
				<div className={styles.item}>New posts</div>
				<div className={styles.item}>New posts</div>
				<div className={styles.item}>New posts</div>
			</div>
		</div>
	);
};

export default Profile;
