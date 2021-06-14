import React from "react";

const Alert = ({alert}) => {
  //   const {msg, bgColor} = alert;
  return (
    alert !== null && (
      <div className={`bg-${alert.bgColor} container`}>
        <h1>{alert.msg}</h1>
      </div>
    )
  );
};

export default Alert;
