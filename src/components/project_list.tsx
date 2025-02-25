import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import * as projectsFetch from "../api/projects_api.ts";

import Project from "../interfaces/DB/project.ts";


function ProjectList() {
	const [projectList, setProjectList] = useState<Project[] | null>(null);

	useEffect(() => {
		// Gets all projects that the user is in
		projectsFetch.getAllForUser(1)
			.then(data => {
				setProjectList(data);
			}).catch(error => {
				console.error("Failed to fetch projects:", error);
				setProjectList(null);
			});
	}, []);

	return (
		<div className="project-list">
			{projectList === null ? (
				<p>Error loading projects.</p>
			) : (
				<Table striped hover>
					<thead>

					</thead>
					<tbody>
						{projectList.map((project: Project, index: number) => (
							<tr key={index}>
								<td>
									<div>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
									</div>
								</td>
								<td><button>Options</button></td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	)
}

export default ProjectList;
