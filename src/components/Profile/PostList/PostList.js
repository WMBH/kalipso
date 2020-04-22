import React from 'react';
import Post from './Post/Post';
import styles from './PostList.module.css';

let PostsData = [ { id: 1, post: 'Hi' }, { id: 2, post: 'HI!' }, { id: 3, post: 'HI!' }, { id: 4, post: 'HI!' } ];

const MyPosts = () => {
	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea name="" id="" cols="30" rows="10" />
				<button>s</button>
			</div>
			<div className="posts">
				<Post message="HI!" />
				<Post message="HI!" />
				<Post message="HI!" />
			</div>
		</div>
	);
};

export default MyPosts;
