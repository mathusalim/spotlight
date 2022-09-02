import React, { useEffect, useState } from "react";
import { useDebouncedDistintct } from "../hooks/useDebouncedDistintct";
import PropTypes from "prop-types";

const SearchInput = ({ search }) => {
    const { UpdateDebounedDistinct } = useDebouncedDistintct(300, search);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        UpdateDebounedDistinct(searchTerm);
    }, [searchTerm]);

    const handleTermChange = (term) => {
        setSearchTerm(term);
    };

    return (
        <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleTermChange(e.target.value)}
        />
    );
};

SearchInput.propTypes = {
    search: PropTypes.func,
};

export default SearchInput;
