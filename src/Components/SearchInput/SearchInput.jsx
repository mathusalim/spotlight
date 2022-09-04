import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { StyledSearchInput } from "./SearchInput.styles";

const SearchInput = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedValue) {
      search(debouncedValue);
    }
  }, [debouncedValue]);

  const handleTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <StyledSearchInput
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => handleTermChange(e.target.value)}
    />
  );
};

export default SearchInput;
