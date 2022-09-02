import React from "react";
import SearchInput from "./SearchInput";
import propTypes from "prop-types";

const Header = ({ search }) => {
  return (
    <div className="header">
      <div className="container flex">
        <h1 className="page-title">Spotlight</h1>
        <SearchInput search={search} />
      </div>
    </div>
  );
};

Header.propTypes = {
  search: propTypes.func,
};

export default Header;
