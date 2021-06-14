import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import About from './components/Pages/About';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import Search from './components/users/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
class App extends React.Component {
  state = {
    users: [],
    loading: false,
    repos: [],
    user: {},
    alert: null
  };
  setAlert = (msg, bgColor) => {
    this.setState({ alert: { msg, bgColor } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  searchUsers = async (propsUpData) => {
    this.setState({ loading: true });

    const res = await axios(
      `https://api.github.com/search/users?q=${propsUpData}&client_id=${
        process.env.REACT_APP_githubClientId || process.env.githubClientId
      }&client_secret=${
        process.env.REACT_APP_githubClientSecret ||
        process.env.githubClientSecret
      }`
    );

    const users = await res.data.items;

    this.setState({ users, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_githubClientId || process.env.githubClientId
      }&client_secret=${
        process.env.REACT_APP_githubClientSecret ||
        process.env.githubClientSecret
      }`
    );

    const user = await res.data;

    this.setState({ user, loading: false });
  };
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios(
      `https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${
        process.env.REACT_APP_githubClientId || process.env.githubClientId
      }&client_secret=${
        process.env.REACT_APP_githubClientSecret ||
        process.env.githubClientSecret
      }`
    );

    const repos = await res.data;

    this.setState({ repos, loading: false });
  };

  ClearSearch = () => this.setState({ loading: false, users: [] });

  render() {
    return (
      <Router>
        <div className='main'>
          <Navbar />
          <Alert alert={this.state.alert} />

          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    ClearSearch={this.ClearSearch}
                    showClearBtn={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />

                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <SingleUser
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={this.state.repos}
                  user={this.state.user}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
