import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogsData = [
	{ id: 1, name: 'Dymich' },
	{ id: 2, name: 'Alena' },
	{ id: 3, name: 'KOzel' },
	{ id: 4, name: 'Deda' },
	{ id: 5, name: 'Dyadya' }
];

let newDialogsData = dialogsData.map((user) => <DialogItem id={user.id} name={user.name} />);

let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'how are u' },
	{ id: 3, message: 'how azaza' },
	{ id: 4, message: 'how azaza' }
];

let newMessagesData = messagesData.map((message) => <Message id={message.id} message={message.message} />);

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>{newDialogsData}</div>
			<div className={styles.messages}>{newMessagesData}</div>
		</div>
	);
};

export default Dialogs;
