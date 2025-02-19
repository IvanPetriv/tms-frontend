import React from "react";
import "./login.module.scss";
import * as authFetch from "../../api/auth_fetch.ts";
import { JWT_TOKEN_OBJECT } from "../../constants/global_variables.ts";


function Login() {
	/*
		Called on form submit
	*/
	const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const formData = new FormData(event.currentTarget);
		const username = formData.get("username") as string ?? "";
		const password = formData.get("password") as string ?? "";

		authFetch.loginUser({
			login: username,
			password: password
		}).then(data => JWT_TOKEN_OBJECT.jwtToken = data.token);
	}

	return (
		<div className="container">
			<div className="login-container" style={{ border: "1px solid red" }}>
				<form onSubmit={loginSubmit} className="login-form">
					<div className="login-input">
						<label htmlFor="username">Email or username</label>
						<input type="text" name="username" id="form-username" placeholder="Enter email or username" />
					</div>
					<div className="login-input">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="form-password" placeholder="Enter password" />
					</div>
					<input type="submit" />
				</form>
				<p>
					Forgot the password? <a href="/passreset">Reset here</a>
				</p>
				<p>
					Don't have an account? <a href="/signup">Sign up here</a>
				</p>
				<div id="login-third-party-options">
					<p>Or login with these services</p>
					<ul>
						<li>Google</li>
						<li>Microsoft</li>
						<li>GitHub</li>
						<li>GitLab</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Login;
