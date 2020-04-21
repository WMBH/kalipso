import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg" />
			</div>
			<div className={styles.descriptionBlock}>ava + opisanie</div>
		</div>
	);
};

export default ProfileInfo;
