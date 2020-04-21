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
