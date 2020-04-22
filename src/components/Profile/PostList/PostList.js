import React from 'react';
import Post from './Post/Post';
import styles from './PostList.module.css';

let postsData = [ { id: 1, post: 'Hi' }, { id: 2, post: 'HI!' }, { id: 3, post: 'HI!' }, { id: 4, post: 'HI!' } ];

let newPostsData = postsData.map((post) => <Post id={post.id} post={post.post} />);

const MyPosts = () => {
	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea name="" id="" cols="30" rows="10" />
				<button>s</button>
			</div>
			<div className="posts">\ {newPostsData}</div>
		</div>
	);
};

export default MyPosts;
