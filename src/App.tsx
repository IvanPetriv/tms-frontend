import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";

import Login from "./app/login/login.tsx";
import Signup from "./app/login/signup.tsx";
import NotFound from "./app/not-found/not-found.tsx";
import PasswordReset from "./app/login/password_reset.tsx";
import Home from "./app/home/home.tsx";
import CreateProject from "./app/create_project/create_project.tsx";

function App() {
  return (
    <>
      <div id="app-root">
        <Router>
          <Suspense>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="passreset" element={<PasswordReset />} />
              <Route path="home" element={<Home />} />
              <Route path="createproject" element={<CreateProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default App;
