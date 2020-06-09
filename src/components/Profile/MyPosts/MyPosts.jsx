import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength300 = maxLengthCreator(300);

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostReduxForm onSubmit={onAddPost} />
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name="newPostText" validate={[ required, maxLength300 ]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	);
};

const AddNewPostReduxForm = reduxForm({
	form: 'profileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;
