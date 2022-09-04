import React from "react";
import Loading from "./Loader/Loading";
import MovieItem from "./MovieItem/MovieItem";

const SearchResult = ({ data }) => {
  return (
    <div className="search-result-container">
      {data.movies?.length > 0 && (
        <div className="container flex scroll">
          {data.movies.map((item) => (
            <MovieItem
              key={item.id}
              movie={item}
              forLanding={false}
              className="movieHolder"
            />
          ))}
        </div>
      )}
      {data.movies?.length === 0 && <Loading></Loading>}
    </div>
  );
};

export default SearchResult;
