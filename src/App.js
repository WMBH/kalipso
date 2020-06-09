import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		return this.props.initialized ? (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/dialogs" render={() => <DialogsContainer />} />

					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />

					<Route path="/users" render={() => <UsersContainer />} />

					<Route path="/login" render={() => <Login />} />
				</div>
			</div>
		) : (
			<Preloader />
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
