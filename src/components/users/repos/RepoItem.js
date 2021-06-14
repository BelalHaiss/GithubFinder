import React from "react";
import "../../layout/nav.css";
import PropTypes from "prop-types";
const RepoItem = ({repo, child}) => {
  return (
    <div className="container mt-2  ">
      <ul>
        <a href={repo.html_url}>{repo.name}</a>
      </ul>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
