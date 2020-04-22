import React from 'react';
import PostList from './PostList/PostList';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<PostList postsData={props.postsData} />
		</div>
	);
};

export default Profile;
