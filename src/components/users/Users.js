import React from "react";
import User from "./User";
import Spinner from "../layout/Spinner";

const Users = ({users, loading}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container my-5" style={myStyle}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const myStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gridGap: "1rem",
};
export default Users;
