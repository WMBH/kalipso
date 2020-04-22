import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route } from 'react-router-dom';

let dialogsData = [
	{ id: 1, name: 'Dymich' },
	{ id: 2, name: 'Alena' },
	{ id: 3, name: 'KOzel' },
	{ id: 4, name: 'Deda' },
	{ id: 5, name: 'Dyadya' }
];

let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'how are u' },
	{ id: 3, message: 'how azaza' },
	{ id: 4, message: 'how azaza' }
];

let postsData = [ { id: 1, post: 'Hi' }, { id: 2, post: 'HI!' }, { id: 3, post: 'HI!' }, { id: 4, post: 'HI!' } ];

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Nav />
			<div className="app-wrapper-content">
				<Route
					path="/dialogs"
					render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData} />}
				/>
				<Route path="/profile" render={() => <Profile postsData={postsData} />} />
			</div>
		</div>
	);
};

export default App;
