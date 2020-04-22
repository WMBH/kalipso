import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	let newDialogsData = props.dialogsData.map((user) => <DialogItem id={user.id} name={user.name} />);
	let newMessagesData = props.messagesData.map((message) => <Message id={message.id} message={message.message} />);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>{newDialogsData}</div>
			<div className={styles.messages}>{newMessagesData}</div>
		</div>
	);
};

export default Dialogs;
