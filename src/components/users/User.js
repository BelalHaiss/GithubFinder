import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
const User = ({user: {login, avatar_url, html_url}}) => {
  return (
    <div className=" border border-primary p-3  text-center">
      <img
        src={avatar_url}
        alt=""
        style={{borderRadius: "50%", width: "60px"}}
      />
      <h3>{login}</h3>

      <Link to={`/user/${login}`}>More</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
