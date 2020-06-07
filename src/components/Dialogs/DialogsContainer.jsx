import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
	};
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToPropsForRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
