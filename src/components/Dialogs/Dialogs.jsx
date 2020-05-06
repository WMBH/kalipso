import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogsView from './DialogsView';
import { connect } from 'react-redux';

// const Dialogs = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState().dialogsPage;

// 				let onSendMessageClick = () => {
// 					store.dispatch(sendMessageCreator());
// 				};

// 				let onNewMessageChange = (body) => {
// 					store.dispatch(updateNewMessageBodyCreator(body));
// 				};

// 				return (
// 					<DialogsView
// 						updateNewMessageBodyCreator={onNewMessageChange}
// 						sendMessage={onSendMessageClick}
// 						dialogsPage={state}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		}
	};
};
const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsView);

export default Dialogs;
