import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";

import AppRouter from "./routes.tsx";

function App() {
  return (
    <>
      <div id="app-root">
        <AppRouter/>
      </div>
    </>
  );
};

export default App;
