import React, {Component, Fragment, useState} from "react";
import {Link} from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "./repos/Repos";
import PropTypes from "prop-types";

class SingleUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
  state = {
    toggoleRepos: false,
  };
  showRepos = () => {
    const currentState = this.state.toggoleRepos;
    this.setState({toggoleRepos: !currentState});
  };
  render() {
    const {
      login,
      bio,
      blog,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      url,
      html_url,
      location,
      followers_url,
      company,
      following_url,
      gists_url,
      followers,
      following,
      public_repos,
      public_gists,
      starred_url,
      subscriptions_url,
      hireable,
      organizations_url,
      repos_url,
    } = this.props.user;
    const {loading, repos} = this.props;
    if (loading) return <Spinner />;
    else {
      return (
        <Fragment>
          <div className=" container my-3">
            <Link to="/" className="btn btn-info me-3">
              Back To Home
            </Link>
            Hireable:{" "}
            {hireable ? (
              <i
                className="bi bi-check-circle-fill"
                style={{color: "green", fontSize: "1rem"}}
              ></i>
            ) : (
              <i
                className="bi bi-patch-exclamation-fill"
                style={{color: "red", fontSize: "1rem"}}
              ></i>
            )}
          </div>
          <div className="container border p-3">
            <div className="row">
              <div className="col-6 text-center">
                <img
                  src={avatar_url}
                  style={{borderRadius: "50%", width: "250px"}}
                  alt=""
                />
                <h3 className="my-2">{login}</h3>
                <p className="text-muted">{location}</p>
              </div>
              <div className="col-6">
                <h4 className="text-center">
                  bio : <p className="text-muted my-2">{bio}</p>
                </h4>
                <a
                  href={html_url}
                  className="btn btn-dark d-block w-50 mx-auto"
                >
                  Visit Github Profile
                </a>
                <div className="my-3">
                  <p className="my-0">Username: {login}</p>
                  <p className="my-0">company: {company}</p>
                  <p className="my-0">website: {blog}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center border container mt-3  p-3">
            <button className="btn btn-primary me-3 d-inline-block ">
              Followers: {followers}
            </button>
            <button className="btn btn-success me-3 d-inline-block ">
              following: {following}
            </button>
            <button className="btn btn-dark me-3 d-inline-block ">
              gists: {public_gists}
            </button>
            <button className="btn btn-danger me-3 d-inline-block ">
              repos: {public_repos}
            </button>
          </div>
          <div className="container">
            <button
              onClick={this.showRepos}
              className="btn text-center d-block mx-auto my-3 w-50 btn-danger"
            >
              View All Repos
            </button>

            {this.state.toggoleRepos ? (
              <Repos repos={repos}>User Repos </Repos>
            ) : null}
          </div>
        </Fragment>
      );
    }
  }
}

export default SingleUser;
