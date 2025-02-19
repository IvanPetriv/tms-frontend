import React from "react";
import "./not-found.scss";

function NotFound() {
	return (
		<div className="container">
			<p>404</p>
			<p>Page was not found</p>
			<a href="/home">Return to home</a>
		</div>
	)
}

export default NotFound;
