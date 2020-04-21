import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={`${styles.dialog} ${styles.active}`}>Dymich</div>
				<div className={styles.dialog}>Dymich</div>
				<div className={styles.dialog}>Dymich</div>
				<div className={styles.dialog}>Dymich</div>
				<div className={styles.dialog}>Dymich</div>
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
