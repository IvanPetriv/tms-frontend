import { useEffect, useMemo, useState } from "react";
import { Table } from "react-bootstrap";

import { jwtTokenObject } from "../../shared/constants/global_variables.ts";
import * as projectsFetch from "../services/fetchers/project_list_fetch.ts";

import Project from "../../shared/interfaces/DB/project.js";


/*
	The main page where a logged in user lands
*/
function Home() {
	const decodedJwtToken = useMemo(() => jwtTokenObject.decodeToken(), []);

	const [projectList, setProjectList]: useState<Project[] | null> = useState(null);

	useEffect(() => {
		// Gets all projects that the user is in
		projectsFetch.getAllForUser(5)
			.then(data => {
				setProjectList(data);
				console.log(data);
			}).catch(error => {
				console.error("Failed to fetch projects:", error);
				setProjectList(null);
			});
	}, []);
	
	return (
		<div>
			<div className="project-list">
				<Table bordered striped hover>
					<thead>
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Description</td>
							<td>Source language</td>
							<td>Created by</td>
						</tr>
					</thead>
					<tbody>
						{projectList === null ? (
							<tr>
								<td colSpan={2}>Error loading projects.</td>
							</tr>
						) : (
							projectList.map((project: Project, index: number) => (
								<tr key={index}>
									<td>{project.id}</td>
									<td>{project.name}</td>
									<td>{project.description}</td>
									<td>{project.sourceLanguage}</td>
									<td>{project.createdBy}</td>
								</tr>
							))
						)}
					</tbody>
				</Table>
			</div>
		</div>
	)
}

export default Home;
