import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Nav />
			<div className="app-wrapper-content">
				<Route path="/dialogs" component={Dialogs} />
				<Route path="/profile" component={Profile} />
			</div>
		</div>
	);
};

export default App;
