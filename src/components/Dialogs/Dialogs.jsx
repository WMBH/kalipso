import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogsView from './DialogsView';
import { connect } from 'react-redux';

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
