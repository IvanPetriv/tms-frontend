import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './app/features/login/login.tsx';
import Signup from "./app/features/login/signup.tsx";
import NoPage from "./app/core/nopage/nopage.tsx";
import PasswordReset from "./app/features/login/password_reset.tsx";
import Home from "./app/features/mainpage/home.tsx";

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
