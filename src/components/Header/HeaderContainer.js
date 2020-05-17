import React, { Component } from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
	componentDidMount() {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true
			})
			.then((res) => {
				if (res.data.resultCode === 0) {
					let { id, login, email } = res.data.data;
					this.props.setAuthUserData(id, login, email);
				}
			});
	}
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		login: state.auth.login
	};
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);