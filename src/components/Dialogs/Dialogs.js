import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
	return (
		<div className={`${styles.dialog} ${styles.active}`}>
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={styles.message}>{props.message}</div>;
};

let DialogsData = [
	{ id: 1, name: 'Dymich' },
	{ id: 2, name: 'Alena' },
	{ id: 3, name: 'KOzel' },
	{ id: 4, name: 'Deda' },
	{ id: 5, name: 'Dyadya' }
];

let MessagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'how are u' },
	{ id: 3, message: 'how azaza' },
	{ id: 4, message: 'how azaza' }
];

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name="Dymich" id="1" />
				<DialogItem name="Alena" id="2" />
				<DialogItem name="KOzel" id="3" />
				<DialogItem name="Deda" id="4" />
				<DialogItem name="Dyadya" id="5" />
			</div>
			<div className={styles.messages}>
				<Message message="Hi" />
				<Message message="how are u" />
				<Message message="how azaza" />
				<Message message="how azaza" />
			</div>
		</div>
	);
};

export default Dialogs;
