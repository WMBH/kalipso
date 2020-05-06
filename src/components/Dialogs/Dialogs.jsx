import React from 'react';
import { StoreContext } from '../../context';

import DialogsView from './DialogsView';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().dialogsPage;

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				};

				let onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));
				};

				return (
					<DialogsView
						updateNewMessageBodyCreator={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogsPage={state}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default Dialogs;
