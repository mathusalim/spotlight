import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import SearchResult from "./Components/SearchResult";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchResults(term.split(""));
  };
  return (
    <div className="app">
      <Header search={handleSearch} />
      <SearchResult movies={searchResults} />
    </div>
  );
}

export default App;
