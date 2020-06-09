import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';

const maxLength100 = maxLengthCreator(100);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Input}
					type="email"
					name="email"
					placeholder="Email"
					validate={[ required, maxLength100 ]}
				/>
			</div>
			<div>
				<Field
					component={Input}
					type="password"
					name="password"
					placeholder="Password"
					validate={[ required, maxLength100 ]}
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

export const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};
	return props.isAuth ? (
		<Redirect to="/profile" />
	) : (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
