import React from 'react';

import DialogsView from './DialogsView';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<DialogsView
			updateNewMessageBodyCreator={onNewMessageChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state}
		/>
	);
};

export default Dialogs;
