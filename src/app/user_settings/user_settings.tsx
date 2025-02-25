import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

export default function UserSettings() {
	const [selectedTab, setSelectedTab] = useState<string>("profile");

	return (
		<div>
			<Tabs activeKey={selectedTab} onSelect={(t) => setSelectedTab(t)}>
				<Tab eventKey="profile" title="Profile">
					<form>
						<div>
							<label>First name</label>
							<input name="user-first-name"/>
						</div>
						<div>
							<label>Middle name</label>
							<input name="user-middle-name"/>
						</div>
						<div>
							<label>Last name</label>
							<input name="user-last-name"/>
						</div>
						<div>
							<label>Username</label>
							<input name="user-username"/>
						</div>
						<div>
							<label>Email</label>
							<input name="user-email"/>
						</div>
						<div>
							<label>Website language</label>
							<select>

							</select>
						</div>
						<div>
							<label>Languages you speak or understand</label>
						</div>
						<div>
							<label>Theme</label>
							<select>

							</select>
						</div>
						<div>
							<label>Delete the account</label>
							<button>Delete</button>
						</div>
					</form>
				</Tab>
				<Tab eventKey="account" title="Account">

				</Tab>
				<Tab eventKey="security" title="Security">

				</Tab>
				<Tab eventKey="notifications" title="Notifications">

				</Tab>
				<Tab eventKey="other" title="Other">

				</Tab>
			</Tabs>
		</div>
	)
}
