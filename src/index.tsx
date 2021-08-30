import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Path } from "./constants";
import "./index.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer position="bottom-left" />
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path={Path.login} component={Login} />
          <Route path={Path.register} component={Register} />
          <App />
          <Redirect to={Path.login} />
        </Switch>
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
