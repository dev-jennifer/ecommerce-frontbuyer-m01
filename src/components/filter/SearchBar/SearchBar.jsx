import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

const Searchbar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="seachBar-icon" />
      <input
        type="text"
        placeholder="Buscar"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default Searchbar;
