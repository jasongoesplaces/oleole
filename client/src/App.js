import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import app from "./components/base";

import Lander from "./pages/Lander";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <Route exact path="/" component={Lander} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authenticated={authenticated}
          />
          <PrivateRoute
            exact
            path="/team"
            component={Team}
            authenticated={authenticated}
          />
        </div>
      </Router>
    );
  }
}
export default App;