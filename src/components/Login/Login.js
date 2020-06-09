import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength24 = maxLengthCreator(24);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Input}
					type="text"
					name="login"
					placeholder="Login"
					validate={[ required, maxLength24 ]}
				/>
			</div>
			<div>
				<Field
					component={Input}
					type="text"
					name="password"
					placeholder="Password"
					validate={[ required, maxLength24 ]}
				/>
			</div>
			<div>
				<Field component={Input} type="checkbox" name="rememberMe" />Remebmer me?
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
