import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';

import Login from './app/pages/login/login.tsx';
import Signup from "./app/pages/login/signup.tsx";
import NoPage from "./app/pages/nopage/nopage.tsx";
import PasswordReset from "./app/pages/login/password_reset.tsx";
import Home from "./app/pages/home/home.tsx";

const App: React.FC = () => {
  return (
    <>
      <div id="app-root">
        <Router>
          <Suspense>
            <Routes>
              <Route path="/">
                <Route></Route>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="passreset" element={<PasswordReset/>}/>
                <Route path="home" element={<Home/>}/>
              </Route>
              <Route path="*" element={<NoPage/>}/>
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
