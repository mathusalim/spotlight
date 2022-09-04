import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { StyledHeader, StyledPageTitle } from "./Header.styles";

const Header = ({ search }) => {
  return (
    <StyledHeader>
      <div className="container flex">
        <NavLink to={""}>
          <StyledPageTitle>Spotlight</StyledPageTitle>
        </NavLink>
        <SearchInput search={search} />
      </div>
    </StyledHeader>
  );
};

export default Header;
