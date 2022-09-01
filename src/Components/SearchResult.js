import React from "react";
import MovieItem from "./MovieItem/MovieItem";

const SearchResult = ({ movies }) => {
  return (
    <div className="search-result-container">
      {movies && movies.length > 0 && (
        <div className="container grid">
          {movies.map((item) => (
            <MovieItem key={item} className="movieHolder" />
          ))}
        </div>
      )}
      {!movies ||
        (movies.length === 0 && (
          <div className="container loader-container">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
