import React from "react";
import { Button } from "react-bootstrap";

import ProjectList from "../../components/project_list.tsx";

import "./home.scss";
import Sidebar from "../../components/sidebar.tsx";


/*
	The main page where a logged in user lands
*/
export default function Home() {
	return (
	<div className="page-container">
		<div className="page-side col-3">
			<Sidebar/>
		</div>
		<div>
			<div className="page-header">
				<div className="page-header-left-align">
					<Button>Create a project</Button>
				</div>
				<div className="page-header-right-align">
					<Button>Notifications</Button>
					<Button>Profile</Button>
					<Button>Settings</Button>
				</div>

			</div>
			<h2>Project list</h2>
			<ProjectList/>
		</div>
	</div>
	)
}
