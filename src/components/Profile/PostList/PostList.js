import React from 'react';
import Post from './Post/Post';
import styles from './PostList.module.css';

const PostList = (props) => {
	let newPostsData = props.postsData.map((p) => <Post id={p.id} post={p.post} />);

	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea name="" id="" cols="2" rows="3" />
				<button>s</button>
			</div>
			<div className="posts">{newPostsData}</div>
		</div>
	);
};

export default PostList;
