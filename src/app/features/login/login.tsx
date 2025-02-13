import React from "react";
import "./login.module.scss";

const Login: React.FC = () => {
	return (
		<div className="container">
			<div className="login-container" style={{ border: "1px solid red" }}>
				<form className="login-form">
					<div className="login-input">
						<label htmlFor="username">Email or username</label>
						<input type="text" id="form-username" placeholder="Enter email or username" name="username" />
					</div>
					<div className="login-input">
						<label htmlFor="password">Password</label>
						<input type="password" id="form-password" placeholder="Enter password" name="password" />
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
