import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import GroupSearch from "./components/GroupSearch";
import GroupPage from "./components/Group";
import ThreadPage from "./components/Thread";
import CreateGroup from "./components/CreateGroup";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        {currentUser ? (
          <Link to={"/home"} className="navbar-brand">
            Thread3r
          </Link>
        ) : (
          <Link to={"/login"} className="navbar-brand">
            Thread3r
          </Link>
        )}

        <div className="navbar-nav mr-auto">
            {currentUser && (
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <Link to={"/groupsearch"} className="nav-link">
                  Groups
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <Link to={"/groupcreate"} className="nav-link">
                  Create Group
                </Link>
              </li>
            )}

        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" onClick={logOut}>
                Log Out
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/groupsearch" component={GroupSearch} />
          <Route exact path="/groupcreate" component={CreateGroup} />
          <Route exact path="/groups/:id" render={(props) => <GroupPage {...props} />} />
          <Route exact path="/threads/:groupId/:threadId" render={(props) => <ThreadPage {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;