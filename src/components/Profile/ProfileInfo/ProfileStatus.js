import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
	let [ editMode, setEditMode ] = useState(false);

	let [ status, setStatus ] = useState(props.status);

	useEffect(
		() => {
			setStatus(props.status);
		},
		[ props.status ]
	);

	const editModeOn = () => {
		setEditMode(true);
	};

	const editModeOff = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={editModeOn}>{props.status || 'Your status is empty'}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input onChange={onStatusChange} autoFocus={true} value={status} onBlur={editModeOff} />
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
