import "./login.module.scss";

function Signup() {
	return (
		<div className="container">
			<div className="login-container" style={{border: "1px solid red"}}>
				<form className="login-form">
					<div className="login-input login-input-field">
						<label htmlFor="email">Email</label>
						<input type="text" id="form-email" placeholder="Enter email" name="email"/>
					</div>
					<div className="login-input login-input-field">
						<label htmlFor="username">Username</label>
						<input type="text" autoComplete="off" id="form-username" placeholder="Enter username" name="username"/>
					</div>
					<div className="login-input login-input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="form-password" placeholder="Enter password" name="password"/>
					</div>
					<div className="login-input">
						<label htmlFor="agreement">
							<input type="checkbox" value="hi" id="form-agreement" name="agreement"/>
							I agree to the terms of use and privacy policy
						</label>
					</div>
					<input type="submit" className="login-input"/>
				</form>
				<p>Already have an account? <a href="/login">Log in here</a></p>
				<div id="login-third-party-options">
					<p>Or sign up with these services</p>
					<ul>
						<li>Google</li>
						<li>Microsoft</li>
						<li>GitHub</li>
						<li>GitLab</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Signup;
