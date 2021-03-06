import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

let maxLength300 = maxLengthCreator(300);

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
	let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	if (props.isAuth == false) {
		return <Redirect to={'/login'} />;
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageReduxForm onSubmit={addNewMessage} />
		</div>
	);
};

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name="newMessageBody"
					placeholder="Enter your message"
					validate={[ required, maxLength300 ]}
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

const AddMessageReduxForm = reduxForm({
	form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
