import "./login.module.scss";

function PasswordReset() {
	return (
		<div className="container">
			<div className="login-container" style={{border: "1px solid red"}}>
				<form className="login-form">
					<div className="login-verification">
						<label htmlFor="username">Enter the verification code</label>
						<input type="text" id="form-verification" name="username"/>
					</div>
					<input type="submit"/>
				</form>
				<p>Remember password? <a href="/login">Log in here</a></p>
			</div>
		</div>
	)
}

export default PasswordReset;
