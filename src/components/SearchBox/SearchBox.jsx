import React from "react";
import { TextField } from "@mui/material";
import { clone, isEmpty } from "lodash";

const SearchBox = ({ term, onSearch }) => {

  const protect = (event) => {
    const value = clone(event.target.value);
    if(!isEmpty(value.trim())) {
      return onSearch(event);
    }
  }

  return (
    <TextField
      label="search"
      value={term}
      data-test="search"
      onChange={protect}
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;
