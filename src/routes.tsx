import React from "react";
import { Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import CreateProject from "./app/create_project/create_project.tsx";
import Home from "./app/home/home.tsx";
import Login from "./app/login/login.tsx";
import PasswordReset from "./app/login/password_reset.tsx";
import Signup from "./app/login/signup.tsx";
import NotFound from "./app/not-found/not-found.tsx";
import Translator from "./app/translator/translator.tsx";
import UserSettings from "./app/user_settings/user_settings.tsx";
import ChatPage from "./app/chats/chat.tsx";
import TaskList from "./app/tasks/task_list.tsx";


export default function AppRouter() {
	return (
		<BrowserRouter>
			<Suspense>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="passreset" element={<PasswordReset />} />
					<Route path="home" element={<Home />} />
					<Route path="createproject" element={<CreateProject />} />
					<Route path="translate" element={<Translator />} />
					<Route path="settings" element={<UserSettings />} />
					<Route path="chats" element={<ChatPage />} />
					<Route path="tasks" element={<TaskList />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
        </BrowserRouter>
	)
}
