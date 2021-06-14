import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
const Repos = ({repos, children}) => {
  return (
    (<h1 className="text-center">{children}</h1>),
    repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
