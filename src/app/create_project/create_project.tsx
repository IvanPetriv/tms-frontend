import React from "react";

export default function CreateProject() {
	return (
		<div>
			<form>
				<div>
					<label>Project name</label>
					<input/>
				</div>
				<div>
					<label>Project address</label>
					<input/>
				</div>
				<div>
					<label>Project visibility</label>
					<div>
						<input type="radio" name="project-visibility" id="option-visibility-public" value="public"/>
						<label htmlFor="option-visibility-public">Public</label>
					</div>
					<div>
						<input type="radio" name="project-visibility" id="option-visibility-invite" value="invite"/>
						<label htmlFor="option-visibility-invite">Invite</label>
					</div>
					<div>
						<input type="radio" name="project-visibility" id="option-visibility-hidden" value="hidden"/>
						<label htmlFor="option-visibility-hidden">Hidden</label>
					</div>
				</div>
				<div>
					<label>Source language</label>
				</div>
				<div>
					<label>Target languages</label>
				</div>
			</form>
		</div>
	)
}
