import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component="input" type="text" name="login" placeholder="Login" />
			</div>
			<div>
				<Field component="input" type="text" name="password" placeholder="Password" />
			</div>
			<div>
				<Field component="input" type="checkbox" name="rememberMe" />Remebmer me?
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

export const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	};
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
