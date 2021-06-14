import React, {Fragment} from "react";
import spinner from "./spinner.gif";
const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="...loading"
      style={{width: "400px", display: "block", margin: "auto"}}
    />
  </Fragment>
);

export default Spinner;