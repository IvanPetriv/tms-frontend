import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import * as projectsFetch from "../../api/project_list_fetch.ts";

import Project from "../../interfaces/DB/project.ts";

/*
	The main page where a logged in user lands
*/
function Home() {
	const [projectList, setProjectList] = useState<Project[] | null>(null);

	useEffect(() => {
		// Gets all projects that the user is in
		projectsFetch.getAllForUser(1)
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
							<th>ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>Source language</th>
							<th>Created by</th>
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
