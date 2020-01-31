import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/login'>Login ||</Link>
          <Link to='/protected'> Premium Content ||</Link>
          <Link to='/login' onClick={handleLogout}>
            {" "}
            Logout
          </Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={BubblePage} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
