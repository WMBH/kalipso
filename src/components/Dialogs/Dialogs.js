import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={`${styles.dialog} ${styles.active}`}>
					<NavLink to="/dialogs/1">Dymich</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/2">Dymich</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/4">Dymich</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/5">Dymich</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/6">Dymich</NavLink>
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>privet</div>
				<div className={styles.message}>kak dela</div>
				<div className={styles.message}>kak pogoda</div>
				<div className={styles.message}>azaza</div>
			</div>
		</div>
	);
};

export default Dialogs;
