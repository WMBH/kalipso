import React from 'react';
import PostList from './PostList/PostList';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<PostList />
		</div>
	);
};

export default Profile;
