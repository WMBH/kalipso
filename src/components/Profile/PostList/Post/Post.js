import React from 'react';
import styles from './Post.module.css';

function Post(props) {
	return (
		<div>
			<div className={styles.item}>{props.message}</div>
		</div>
	);
}

export default Post;
