import React from 'react';
import Post from './Post/Post';
import styles from './PostList.module.css';

const MyPosts = () => {
	return (
		<div className={styles.posts}>
			My posts
			<Post message="HI!" />
		</div>
	);
};

export default MyPosts;
