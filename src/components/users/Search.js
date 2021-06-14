import React, {useState} from "react";
import PropTypes from "prop-types";

const Search = ({setAlert, searchUsers, showClearBtn, ClearSearch}) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something", "danger");
    } else {
      searchUsers(text);
      setText(text);
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form container ">
        <input
          type="text"
          name="text"
          className="w-100 "
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="btn my-2 w-100 btn-dark" />
        {showClearBtn && (
          <button onClick={ClearSearch} className=" btn-danger w-100">
            Clear
          </button>
        )}
      </form>
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  ClearSearch: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
};

export default Search;
